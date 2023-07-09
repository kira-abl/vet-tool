const connection = require("../database/db_connection");

const submitData = (array, body) => {

console.log("Body",  body.answers.weight);

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


const {age, weight, sex, spayed, breed, email} = body.answers;


console.log("Weight", weight);
  console.log("Type", type);

  console.log("At queries");
  //
  return connection.query(
    `INSERT INTO answers(image1, image2, image3, age, weight, sex, spayed, breed, email, date)
     VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,

    [array[0].link, array[1].link, array[2].link, age, weight, sex, spayed, breed, email, time]
  );
};



const getData = () => {
  return connection.query('SELECT * FROM answers');
};




module.exports = {
  submitData,
  getData,
};
