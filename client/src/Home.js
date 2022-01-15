import * as Survey from "survey-react";
import "survey-react/survey.css";
import './App.css';
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

Survey.StylesManager.applyTheme("modern");



var json = { surveyId: '400c40d0-638e-4adb-9041-c6221c2adf1d', surveyPostId: '096336ac-85ec-4337-afd9-a24d5c5fb25c'};



function onValueChanged(options) {
    console.log(options.valuesHash);
}

function onUploadFiles(survey, options) {
    console.log("Fire!", options.files[0]);

    var formData = new FormData();


    var file = options.files[0];
    formData.append('fileName', file.name);
    formData.append('file', file);
    formData.append('fileType', file.type);
    // formData.append(file.name, file);
    for (var value of formData.values()) {
    console.log(value.name);
}

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "/logmood",
      // `/logmood?file-name=${file.name}&file-type=${file.type}`,
    ); // https://surveyjs.io/api/MySurveys/uploadFiles
    xhr.onload = function() {
        var response = JSON.parse(xhr.responseText);
        console.log("Data received", response);

    };
    xhr.send(formData);
    // setTimeout(() => {
    //     options.callback("success", [
    //         {
    //           file: options.files[0],
    //           content:
    //               "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
    //         }
    //     ]);
    // }, 2000);
}


function Home() {

  function onComplete(result) {

    function myFunction() {
      alert("Data could not be saved. Please refresh the page and try again.");
}

    const toggleCompleted = () => setCompleted("completed");



      console.log("Complete! " + result.data);
      fetch("/logmood", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          result: result.data,
        })
      })
        // .then(response => answer = "Yes")
        // .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
               if(response.status === 200){

                toggleCompleted();

               } else {

                 myFunction();
                 throw new Error(response.status);


       }})
       .catch(err => console.log(err));
}

var model = new Survey.Model(json);
const [completed, setCompleted] = React.useState("");
console.log("Completed:", completed);

if (completed === "completed") {
    return <Redirect to={"/menu"} />
  }


  return (
    <div className="App">
      <Survey.Survey
          model={model}
          onComplete={onComplete}
          onValueChanged={onValueChanged}
          // onUploadFiles={onUploadFiles}


        />
    </div>
  );

}

export default Home;
