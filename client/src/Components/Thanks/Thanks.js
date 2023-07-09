import React, { useEffect } from "react";
import "./Thanks.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link, Redirect } from "react-router-dom";

const Thanks = props => {

  useEffect(() => {
    props.setRedirect(false);
  }, []);
  
  
  console.log(props.redirect);

  if (props.redirect === true) {
    return <Redirect to={"/dashboard"} />
  }


  return (
    <div>
    <Logos
      h3=<h3>Thank You!</h3>
      textNormal=<p>Your answers are being saved. Please don't navigate away from this page and wait to be redirected. Thanks for using our app!</p>
      

    />



      <Link to="/" style={{ textDecoration: "none", color: "#F26A56" }}>
      <p style={{ textAlign: "center", fontWeight: "700", fontFamily: "Lato, sans-serif", fontSize: "16px", lineHeight: "20.8px", marginBottom: "107px"}}>
      Start Again Without Saving {'\u2192'}
      </p>
      </Link>


    </div>
  );
};

export default Thanks;
