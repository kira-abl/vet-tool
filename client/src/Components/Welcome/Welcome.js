import React from "react";
import "./Welcome.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

const Welcome = props => {
  return (
    <div>
    <Logos
      h3=<h3>Canine Body Condition Score</h3>
      textNormal=<p>Welcome to our Canine Body Condition Score App.
      This app is part of a research collaboration between Tech4Animals Lab, University of Haifa and Stay Labs.</p>
      start="1"
      
    />

    <div className="blue">
      <div className="rectangle">
          </div>

        <div className="motto">
        <h6 style={{ color: "white" }}>
        STAY HAPPY. STAY HEALTHY. STAY IN THE IDEAL BODY COMPOSITION SCORE.
</h6>
      </div>
      <img src={"/assets/images/dog_blueBG.png"}/>


    </div>
      <div className="smallText">
        <p>Canine body condition score is a hand-on assessment and scoring tool to assess dogs' nutrition and wellbeing.
            Thank you for taking the time to help us in improving dogs' wellbeing.</p>
      </div>
      <Link to="/upload" style={{ textDecoration: "none" }}>
      <Button width="165px" bcolor="#F26A56" height="48px" color="#FFFFFF" className="buttonNav" border="0px"  >
        {" "}
        Start Now{" "}
      </Button>
      </Link>

      <p style={{ textAlign: "center", fontFamily: "Poppins", fontSize: "10px", lineHeight: "17px", marginBottom: "107px"  }}>Please view our Terms and Conditions Policy
      </p>
    </div>
  );
};

export default Welcome;
