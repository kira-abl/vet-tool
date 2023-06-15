import React, {useState, useRef, useEffect } from "react";
import "./Charts.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import Box from "../Box/Box.js";
import { Link } from "react-router-dom";

const Charts = props => {

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const [data, setData] = React.useState("none");
  const [show, setShow] = React.useState("hidden");


console.log("Data in Charts", data);
console.log(show);

  const ConditionalLink = ({children}) => {
      if (data !== "none") {
        console.log("In conditional link data is", data);
          return <Link to="dogs" style={{ textDecoration: "none" }} >{children}</Link>;
        }
          else {
            console.log("Data is empty", data);
              return <>{children}</>;
            }
    };

    const Validate = (props) => {
        if (data === "none") {
          setShow("visible");
          console.log("Button", show);

          }
      };

    useEffect(() => {

    if (show === "visible" && data !== "none" ) setShow("hidden");
  }, [data]);

//   useEffect(() => {
//     const timer = setTimeout (()  => {
//   if (show === "visible" && data !== "none") setShow("hidden")}, 0);
// }, [data]);

  return (
    <div>
    <Logos
      h3=<h3>Select Body Condition Score</h3>
      textNormal=<p>Consider the following chart and evaluate the dog's body condition score (BCS*):</p>
      list="true"
      start="4"
    />

    
    <p className="smallHeader">BSC:</p>
      
      <Box
      data={data}
      setData={setData}/>

      

      <div className={show}>
      <p style={{ color: "#F26A56", marginBottom: "0px" }}>No type chosen</p>
      </div>

      <div className="buttonBox">




<Link to="upload2" style={{ textDecoration: "none" }}>
      <Button


      width="104px" bcolor="white" height="40px" color="#0A0A0B" className="buttonNav1" border="1px solid #000000"  >
        {" "}
        Back{" "}
      </Button>
</Link>
      <ConditionalLink>
      <Button function={Validate}
       width="104px" bcolor="#F26A56" height="40px" color="#FFFFFF" className="buttonNav1" border="0px"  >
        {" "}
        Next{" "}
      </Button>
      </ConditionalLink>

      </div>
    </div>
  );
};

export default Charts;
