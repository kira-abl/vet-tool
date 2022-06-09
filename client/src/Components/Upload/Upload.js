import React, { useState, useRef, useEffect } from "react";
import "./Upload.css";
import Frame from "../Frame/Frame.js";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

{/*to show local images in React, when created with Create React App, one should put them into /assets/images located in th public folder
// <img src={"/assets/images/logo.png"}/>*/}



const Upload = (props) => {

  const mystyle = {
    padding: "10px",
  };


  const [files, setFiles] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("No file chosen");
  const [caption, setCaption] = useState("");
  const [design, setDesign] = useState("hide");
  const [frameDesign, setFrameDesign] = useState("frame");
  const inputRef = useRef();




  {/*useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Files:", files, "Name:", name, "Preview", preview)
  }, 2000);
  return () => clearTimeout(timer);
}, [files]);*/}

  const handleClick = () => {
    inputRef.current.click();
    console.log("Ref", inputRef.current.value);
  }

  const changeInput = () => {
    inputRef.current.value = "";
    console.log("Ref", inputRef.current.value);
  }

  const functionOne = (e) => {
    console.log(files);
    setFiles(e.target.files[0]);
    setDesign("show");
    setFrameDesign("frameLarge");
  }

  const functionTwo = (e) => {
    if (e.target.value === "" || e.target.src.includes("close-circle.png")) {

      setName("No file chosen");
      setCaption("");
      changeInput();
      setDesign("hide");
      setFrameDesign("frame");
    }
    else {
      console.log(e.target.src);
      setName(e.target.files[0].name + " added successfuly");
      setCaption(e.target.files[0].name);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  }


  return (
    <div>
      <Logos
        h3=<h3>Canine Body Condition Score</h3>
        textNormal=<p>Take a side-view picture of the dog (see example below)</p>
        start="1"
        list = "true"
      />

      <div className="form">
        <input
          ref={inputRef}
          type="file"
          multiple
          onChange={(e) => { functionOne(e); functionTwo(e); }}
        />
      </div>

      <Frame
        text={name}
        caption={caption}
        image=<img src={preview} className="imageSmall"/>
        design={design}
        frameDesign={frameDesign}
        icon=<img src={"/assets/images/close-circle.png"} style={mystyle} onClick={(e) => {functionTwo(e)}}/>
        button=<button onClick={handleClick} className="button">
                  {" "}
                  Choose file{" "}
              </button>
      />
      <div className="example">
      <img src={"/assets/images/dog_side.jpeg"}/>
      </div>

      <div className="buttonBox">
      <Link to="/" style={{ textDecoration: "none" }}>
      <Button width="104px" bcolor="white" height="40px" color="#0A0A0B" className="buttonNav1" border="1px solid #000000"  >
        {" "}
        Back{" "}
      </Button>
      </Link>

      <Link to="/upload1" style={{ textDecoration: "none" }}>
      <Button width="104px" bcolor="#F26A56" height="40px" color="#FFFFFF" className="buttonNav1" border="0px"  >
        {" "}
        Next{" "}
      </Button>
      </Link>

      </div>

      </div>
  );
};

export default Upload;
