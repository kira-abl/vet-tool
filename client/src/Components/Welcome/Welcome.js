import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Welcome.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";



const Welcome = props => {

  // useEffect(() => {
  //   setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
    
  // }, []);

  // const containerRef = useRef();

  // useLayoutEffect(() => {

  //   if(containerRef.current) { 
  //     window.scrollTo(0, containerRef.current.offsetTop);
  //     console.log(containerRef.current) 
  // } 
  //   });


  return (
    <div>
    <Logos
      h3=<h3>DOG-ID</h3>
      textNormal=<p>Welcome to our DOG-ID App.
      This app is part of a research collaboration between Tech4Animals Lab, University of Haifa and One Language Project.</p>
      start="1"

    />

    <div className="blue">
      {/* <div className="rectangle">
          </div> */}

        {/* <div className="motto">
        <h6 style={{ color: "white" }}>
        STAY HAPPY. STAY HEALTHY. STAY IN THE IDEAL BODY CONDITION SCORE.
</h6>
      </div> */}
      <img src={"/assets/images/dog_screen.jpeg"}/>


    </div>
      <div className="smallText">
        <p>Thank you for contributing to the Dog Recognition Project! Our app collects data for an individual dog recognition project that will help people find their lost dogs.</p>
      </div>
      <Link to="/validation" style={{ textDecoration: "none" }}>
      <Button width="165px" bcolor="#F26A56" height="48px" color="#FFFFFF" className="buttonNav" border="0px"  >
        {" "}
        Start Now{" "}
      </Button>
      </Link>

      

      <p style={{ textAlign: "center", fontFamily: "Poppins", fontSize: "10px", lineHeight: "17px", marginBottom: "107px"  }}>
      Get data&nbsp;  
      <span style={{ color: "green"}}><Link to="/dashboard">here
      </Link>
      </span>
      </p>
    </div>
  );
};

export default Welcome;
