import React, { useState, useRef, useEffect } from "react";
import "./Dogs.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import Form from "../Forms/Forms.js";

const Dogs = props => {

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])

  const [buttonColor, setButtonColor] = useState("rgba(0, 0, 0, 0.04)");
  const [buttonTextColor, setButtonTextColor] = useState("#9E9E9E");

  const ConditionalLink = ({children}) => {
    if (props.answers.weight !== '') {
      console.log("In conditional link of validation",props.answers.weight);
      setButtonColor("#F26A56");
      setButtonTextColor("#FFFFFF");
        return <Link to="thanks" style={{ textDecoration: "none" }} >{children}</Link>;
      }
        else {
          
          console.log("Data is empty", props.answers.weight,);
          setButtonColor("#rgba(0, 0, 0, 0.04)");
          setButtonTextColor("##9E9E9");
            return <>{children}</>;
          }
  };



  return (
    <div>
    <Logos
      h3=<h3>Tell Us More About Your Dog</h3>
      textNormal=<p>Dogs' energy and nutritional requirements change as they age</p>


    />

    <Form
    answers={props.answers}
    setAnswers={props.setAnswers}/>
    



      <div className="buttonBox">
      <Link to="charts" style={{ textDecoration: "none" }}>
      <Button width="104px" bcolor="white" height="40px" color="#0A0A0B" className="buttonNav1" border="1px solid #000000"  >
        {" "}
        Back{" "}
      </Button>
      </Link>

      <ConditionalLink>
      <Button width="104px" bcolor={buttonColor} height="40px" color={buttonTextColor} className="buttonNav1" border="0px"  >
        {" "}
        Finish{" "}
      </Button>
      </ConditionalLink>
  
      </div>
    </div>
  );
};

export default Dogs;
