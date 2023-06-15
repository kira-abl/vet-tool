import React, { useState, useRef, useEffect } from "react";
// import "./Welcome.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import Form from "../Forms/FormsResearcher.js";

const Validation = (props) => {


  console.log("in validation email", props.email);

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])

  return (
    <div>
    <Logos
      h3=<h3>Before We Start</h3>
      textNormal=<p>We use your email address to match reported information with the person who submitted. It is only used for our internal analyses and  we will never share your information with any 3rd party entity without your explicit consent. </p>
      start="1"

    />

    <Form
    email={props.email}
    user={props.user}
    setEmail={props.setEmail}
    setUser={props.setUser}
    
    />


      <Link to="/upload" style={{ textDecoration: "none" }}>
      <Button width="165px" bcolor="#F26A56" height="48px" color="#FFFFFF" className="buttonNav" border="0px"  >
        {" "}
        Continue{" "}
      </Button>
      </Link>

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
