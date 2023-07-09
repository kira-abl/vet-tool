const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const fs = require('fs');
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit:50000}));
require('env2')('./config.env');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
var async = require("async");
const queries = require("./queries/queries.js");
const converter = require('json-2-csv');
const s3Zip = require('s3-zip')
const join = require('path').join;
const XmlStream = require('xml-stream');




/**
 * This gist was inspired from https://gist.github.com/homam/8646090 which I wanted to work when uploading an image from
 * a base64 string.
 * Updated to use Promise (bluebird)
 * Web: https://mayneweb.com
 *
 * @param  {string}  base64 Data
 * @return {string}  Image url
 */

// let userId = 1;

const imageUpload = async (item) => {

  // You can either "yarn add aws-sdk" or "npm i aws-sdk"
  const AWS = require('aws-sdk');
  // console.log("Base from function", base64);

  // Configure AWS with your access and secret key.
  const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET } = process.env;

  // Configure AWS to use promise
  AWS.config.setPromisesDependency(require('bluebird'));
  AWS.config.update({ accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY, region: AWS_REGION });

  // Create an s3 instance
  const s3 = new AWS.S3();

  // Ensure that you POST a base64 data to your server.
  // Let's assume the variable "base64" is one.
  const base64 = item.content;
  const d = new Date();

  let time = d.toUTCString().replace(/\s+|:|,|\(|\)/g, '');

  const name = time + item.name.replace(/\s+|\(|\)/g, '');
  console.log("Name", name);

  const type = base64.split(';')[0].split('/')[1];
  console.log("Type", type);
  // console.log("Item content", base64);

  const data = base64.split(';')[0].split('/')[0].split(':')[1];
  console.log("Data", data);

  let base64Data;

  if (data === "video") {

  base64Data = new Buffer.from(base64.replace(/^data:video\/\w+;base64,/, ""), 'base64');

}

else if (data === "image") {
  console.log("It's an image");
  base64Data = new Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""), 'base64');
}
  // console.log("New Base", base64Data);
  //
  // // Getting the file type, ie: jpeg, png or gif

  // const name = "";

  // Generally we'd have an userId associated with the image
  // For this example, we'll simulate one


  // With this setup, each time your user uploads an image, will be overwritten.
  // To prevent this, use a different Key each time.
  // This won't be needed if they're uploading their avatar, hence the filename, userAvatar.js.
  const params = {
    Bucket: S3_BUCKET,
    Key: name, // type is not required
    Body: base64Data,
    ACL: 'public-read',
    ContentEncoding: 'base64', // required
    ContentType: `${data}/${type}` // required. Notice the back ticks
  }
  // console.log(params);

  // The upload() is used instead of putObject() as we'd need the location url and assign that to our user profile/database
  // see: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
  let location = '';
  let key = '';
  try {
    const { Location, Key } = await s3.upload(params).promise();
    location = Location;
    key = Key;
  } catch (error) {
     // console.log(error)
  }

  // Save the Location (url) to your database and Key if needs be.
  // As good developers, we should return the url and let other function do the saving to database etc
  console.log("Location", location, "Key", key);

  return location;

  // To delete, see: https://gist.github.com/SylarRuby/b3b1430ca633bc5ffec29bbcdac2bd52
}



app.post("/submitdata",(req, res, next) => {
  console.log(req.body);

  let array = [
    {
      name: "",
      content: "",
      link: ""
    },
    {
      name: "",
      content: "",
      link: ""
    },
    {
    name: "",
    content: "",
    link: ""
      }
  ]

console.log(array);

  if (req.body.answers.image1 !== undefined) {
  console.log("Image body", req.body.answers.image1);
    array[0].content = req.body.answers.image1;
      array[0].name = req.body.answers.image1Name;
    } else  {
      array[0].content = "";
      array[0].name = "";
      array[0].link = "";
      };

    if (req.body.answers.image2 !== undefined) {
      array[1].content = req.body.answers.image2;
        array[1].name = req.body.answers.image2Name;
      } else  {
        array[1].content = "";
        array[1].name = "";
        array[1].link = "";
        };

      if (req.body.answers.image3 !== undefined) {
        array[2].content = req.body.answers.image3;
          array[2].name = req.body.answers.image3Name;
        } else  {
          array[2].content = "";
          array[2].name = "";
          array[2].link = "";
          };


    async.eachOfSeries(array, function(item, key, callback) {

    if( item.content === "" ) {
      console.log('No image');
      callback();
    } else {

      try {
            imageUpload(item)
            .then(value => {
              array[key].link = value;
              })
              .then(value => {
                return callback();
                })
        } catch (e) {
            return callback(e);
        }


      // callback();
    }
  }, function(err) {
    // if any of the file processing produced an error, err would equal that error
    if( err ) {
      // One of the iterations produced an error.
      // All processing will now stop.
      console.log(err);
    } else {


      console.log('All images have been uploaded successfully');
      queries
        .submitData(array, req.body)
        .then(value => console.log("In theDB!"))
        .then(value => res.status(200).json({"name":"GeeksforGeeks"}))
        .catch((err) => next(err));

    }
  });

});


app.get("/data", (req, res, next) => {
  console.log("Hit data");
  queries
    .getData()
    // .then((data) => res.status(200).json(data))
    // .then(data => data.json())
    .then(data => converter.json2csvAsync(data.rows))
    .then(csv => res.header('Content-Type', 'text/csv').send(csv))
    // .then(data => console.log(data))
    // .then(data => res.header('Content-Type', 'text/csv').send(data))
    .catch((err) => next(err));
});


app.get('/download', (req, res) => {

    const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET, AWS_SDK_LOAD_CONFIG } = process.env;
    const AWS = require('aws-sdk');

    AWS.config.update({ accessKeyId: ACCESS_KEY_ID, secretAccessKey: SECRET_ACCESS_KEY, region: AWS_REGION });
    const region = AWS_REGION;
    const bucket = S3_BUCKET;
    const s3 = new AWS.S3({ region: region })
    const params = {
      Bucket: bucket
    }

    const filesArray = []
    const files = s3.listObjects(params).createReadStream()
    console.log(files);
    const xml = new XmlStream(files)
    xml.collect('Key')
    xml.on('endElement: Key', function(item) {
      filesArray.push(item['$text'])
    })

    xml
      .on('end', function () {
        zip(filesArray)
      })

    function zip(files) {
      console.log(files)
      s3Zip
       .archive({ region: region, bucket: bucket, preserveFolderStructure: true, debug: true }, '', files)
       .pipe(res)
    }



// s3Zip
//   .archive({ region: region, bucket: bucket, debug: true}, '', [file1, file2, file3, file4])
//   .pipe(res)
  })




// app.use(express.static(path.join(__dirname, 'build')));
//
//
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use(express.static(path.join(__dirname, "build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
