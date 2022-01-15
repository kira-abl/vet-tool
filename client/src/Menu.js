import React from "react";
import "./Menu.css";
import Container from "./Container/Container.js";
import { Link } from "react-router-dom";
import Button from "./Button/Button.js";
const fileDownload = require('js-file-download');





const MainMenu = () => {

  let [indicator, setIndicator] = React.useState("");
  console.log("Indicator", indicator);


  const changeIndicatorOn = () => setIndicator("indicator");
  const changeIndicatorOff = () => setIndicator("");

  function myFunction(parsed) {
    var result;
    console.log(result);
    return result;
}


  const GetData = () => {



      return fetch("/data")
        .then(res => {
                console.log(res);
                const header = res.headers.get('Content-Type');
                console.log("Header", header);
                const fileName = "Report.csv";
                res.blob()
                .then(file => fileDownload(file, fileName))
            })
        .catch(error => {
          console.error(error);
        });
    };


    /////////////////////

    const GetFiles = () => {

      changeIndicatorOn();


      return fetch("/download")
          .then(res => {
                  console.log(res);
                  const fileName = "Files.zip";
                  res.blob()
                  .then(file => fileDownload(file, fileName))
                  .then(file => changeIndicatorOff())


              })
          .catch(error => {
            console.error(error);
          });
      };


  return (
  <div>
    <div className="main">
      <Link to="./" style={{ textDecoration: "none" }}>
        <Container className="smallContFlex">

          <div>HOME</div>
        </Container>
      </Link>


        <Container className="brownContFlex">
        <Button function={GetData} className="smallButton1">
        {" "}
        DATA{" "}
      </Button >
        </Container>

        <Container className="greenContFlex">
        <Button function={GetFiles} className="smallButton2">
        {" "}
        IMAGES{" "}
      </Button >
        </Container>

        <div className={indicator}>

          </div>


    </div>


  </div>
);
};

export default MainMenu;
