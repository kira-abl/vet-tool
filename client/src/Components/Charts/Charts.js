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




  const [show, setShow] = React.useState("hidden");
  const [buttonColor, setButtonColor] = useState("rgba(0, 0, 0, 0.04)");
  const [buttonTextColor, setButtonTextColor] = useState("#9E9E9E");


console.log("Data in Charts", props.answers);
console.log(show);

  const ConditionalLink = ({children}) => {
      if (props.answers.bcs !== '') {
        console.log("In conditional link data is", props.answers.bcs);
        setButtonColor("#F26A56");
        setButtonTextColor("#FFFFFF");
          return <Link to="upload1" style={{ textDecoration: "none" }} >{children}</Link>;
        }
          else {
            console.log("Data is empty", props.answers.bcs);
            setButtonColor("#rgba(0, 0, 0, 0.04)");
            setButtonTextColor("##9E9E9");
              return <>{children}</>;
            }
    };

    const Validate = () => {
        console.log("In function validate", props.answers);
        if (props.answers.bcs === '') {
          setShow("visible");
          console.log("Button", show);

          }
      };

    useEffect(() => {

    if (show === "visible" && props.answers.bcs !== '' ) setShow("hidden");
  }, [props.answers]);

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
      answers={props.answers}
      setAnswers={props.setAnswers}/>

      

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
       width="104px" bcolor={buttonColor} height="40px" color={buttonTextColor} className="buttonNav1" border="0px"  >
        {" "}
        Next{" "}
      </Button>
      </ConditionalLink>

      </div>
    </div>
  );
};

export default Charts;
