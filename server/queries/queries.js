const connection = require("../database/db_connection");

const logMood = (array, body) => {

// console.log("Body",  body.result['question18-Comment']);

  let whicOp = "";
  let daysAgo = "";
  let other = "";
  let type = "";

  var now = new Date();
        var year    = now.getUTCFullYear();
        var month   = now.getUTCMonth()+1;
        var day     = now.getUTCDate();
        var hour    = now.getUTCHours();
        var minute  = now.getUTCMinutes();
        var second  = now.getUTCSeconds();
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }
        var time = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;


  // let time = d.toUTCString();


const {question9} = body.result;

// if (Question401 === true) {
//    whichOp = Question402;
//    daysAgo = Question403;
//
//  } else {
//    whichOp = "";
//    daysAgo = "";
// }
//
// if (Question111 === true) {
//    type = "clinical";
//
//  } else {
//    type = "research";
//
// }
//
// if (body.result['question18-Comment'] !== undefined) {
//    other = body.result['question18-Comment'];
//    console.log(other);
//
//
//  } else {
//    other = "";
// }

  console.log("Type", type);

  console.log("At queries");
  //
  return connection.query(
    `INSERT INTO answers(image1, image2, image3, bcs, date)
     VALUES($1, $2, $3, $4, $5)`,

    [array[0].link, array[1].link, array[2].link, question9, time]
  );
};



const getData = () => {
  return connection.query('SELECT * FROM answers');
};

// const getImages = () => {
//   return connection.query(`SELECT image1, image2 FROM answers WHERE (image2!='')`);
// };


module.exports = {
  logMood,
  getData,
  // getImages
};
