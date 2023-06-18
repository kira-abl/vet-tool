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

  return (
    <div>
    <Logos
      h3=<h3>Tell Us More About Your Dog</h3>
      textNormal=<p>Dogs' energy and nutritional requirements change as they age</p>


    />

    <Form
    />



      <div className="buttonBox">
      <Link to="charts" style={{ textDecoration: "none" }}>
      <Button width="104px" bcolor="white" height="40px" color="#0A0A0B" className="buttonNav1" border="1px solid #000000"  >
        {" "}
        Back{" "}
      </Button>
      </Link>

      <Link to="thanks" style={{ textDecoration: "none" }}>
      <Button width="104px" bcolor="#F26A56" height="40px" color="#FFFFFF" className="buttonNav1" border="0px"  >
        {" "}
        Finish{" "}
      </Button>
      </Link>

      </div>
    </div>
  );
};

export default Dogs;
