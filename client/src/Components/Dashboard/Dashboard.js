import React, { useEffect } from "react";
import "./Dashboard.css";
import Container from "../../Container/Container.js";
import { Link } from "react-router-dom";
import Button from "../Button/Button.js";
import Logos from "../Logos/Logos.js";
const fileDownload = require('js-file-download');







const Dashboard = (props) => {

  useEffect(() => {
    props.setRedirect(false);
  }, []);

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

<Logos
      h3=<h3>See the Collected Data</h3>
      // textNormal=<p>Dogs' energy and nutritional requirements change as they age</p>


    />


    <div className="main">
        <Container className="brownContFlex">
        <Button function={GetData} className="smallButton1">
        {" "}
        DATA{" "}
      </Button >
        </Container>

        <Container className="greenContFlex">
        <Button function={GetFiles} className="smallButton2">
        {" "}
        FILES{" "}
      </Button >
        </Container>

        <div className={indicator}>

          </div>


    </div>

    <Link to="/" style={{ textDecoration: "none", color: "#F26A56" }}>
      <p style={{ textAlign: "center", fontWeight: "700", fontFamily: "Lato, sans-serif", fontSize: "16px", lineHeight: "20.8px", marginBottom: "107px"}}>
      Start Again {'\u2192'}
      </p>
      </Link>

  </div>
);
};

export default Dashboard;
