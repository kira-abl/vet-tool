import React from "react";
import "./Thanks.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

const Thanks = props => {
  return (
    <div>
    <Logos
      h3=<h3>Thank You!</h3>
      textNormal=<p>Your answers are being saved. Please wait to be redirected. Thanks for using our app!</p>
      start="1"

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
