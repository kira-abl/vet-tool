import React, { useState, useRef, useEffect } from "react";
// import "./Welcome.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import Form from "../Forms/FormsResearcher.js";

const Validation = (props) => {

  const [buttonColor, setButtonColor] = useState("rgba(0, 0, 0, 0.04)");
  const [buttonTextColor, setButtonTextColor] = useState("#9E9E9E");


  console.log("In validation answers", props.answers);

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])

  


  


  const ConditionalLink = ({children}) => {
    if (props.answers.vet !== '' && props.answers.email !== '') {
      console.log("In conditional link of validation",props.answers.vet);
      setButtonColor("#F26A56");
      setButtonTextColor("#FFFFFF");
        return <Link to="upload" style={{ textDecoration: "none" }} >{children}</Link>;
      }
        else {
          
          console.log("Data is empty", props.answers.vet, props.answers.email);
          setButtonColor("#rgba(0, 0, 0, 0.04)");
          setButtonTextColor("##9E9E9");
            return <>{children}</>;
          }
  };

  return (
    <div>
    <Logos
      h3=<h3>Before We Start</h3>
      textNormal=<p>We use your email address to match reported information with the person who submitted. It is only used for our internal analyses and  we will never share your information with any 3rd party entity without your explicit consent. </p>
      start="1"

    />

    <Form
    //email={props.email}
    //user={props.user}
    //setEmail={props.setEmail}
    //setUser={props.setUser}
    answers={props.answers}
    setAnswers={props.setAnswers}
    
    />

      <ConditionalLink>
      <Button
       width="165px" bcolor={buttonColor} height="48px" color={buttonTextColor} className="buttonNav" border="0px"  >
        {" "}
        Continue{" "}
      </Button>
      </ConditionalLink>


      {/* <Link to="/upload" style={{ textDecoration: "none" }}>
      <Button width="165px" bcolor="#F26A56" height="48px" color="#FFFFFF" className="buttonNav" border="0px"  >
        {" "}
        Continue{" "}
      </Button>
      </Link> */}

      <p style={{ textAlign: "center", fontFamily: "Poppins", fontSize: "10px", lineHeight: "17px", marginBottom: "107px"  }}>
      Please view our&nbsp;  
      <span style={{ color: "green"}}><Link to="/terms">Terms and Conditions Policy
      </Link>
      </span>
      </p>


    </div>
  );
};

export default Validation;
