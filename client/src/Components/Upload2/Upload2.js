import React, { useState, useRef, useEffect } from "react";
import "./Upload2.css";
// import Frame from "../Frame/Frame.js";
import NewFrame from "../NewFrame/NewFrame.js";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";

{/*to show local images in React, when created with Create React App, one should put them into /assets/images located in th public folder
// <img src={"/assets/images/logo.png"}/>*/}



const Upload = (props) => {

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  const mystyle = {
    padding: "0px",
  };

  const iconStyle = {
    padding: "10px",
  };


  const [files, setFiles] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("No file chosen");
  const [caption, setCaption] = useState("");
  const [design, setDesign] = useState("hide");
  const [frameDesign, setFrameDesign] = useState("frame");
  const [buttonColor, setButtonColor] = useState("rgba(0, 0, 0, 0.04)");
  const [buttonTextColor, setButtonTextColor] = useState("#9E9E9E");
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
    props.setAnswers({ ...props.answers, "image3": e.target.files[0]})
  }

  const functionTwo = (e) => {
    if (e.target.value === "" || e.target.src.includes("close-circle.png")) {

      setName("No file chosen");
      setCaption("");
      changeInput();
      setDesign("hide");
      setFrameDesign("frame");
      setFiles(null);
    }
    else {
      console.log(e.target.src);
      setName(e.target.files[0].name + " added successfuly");
      setCaption(e.target.files[0].name);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  }

  const ConditionalLink = ({children}) => {
    if (files !== null) {
      console.log("In conditional link data is", files);
      setButtonColor("#F26A56");
      setButtonTextColor("#FFFFFF");
        return <Link to="charts" style={{ textDecoration: "none" }} >{children}</Link>;
      }
        else {
          
          console.log("Data is empty", files);
          setButtonColor("#rgba(0, 0, 0, 0.04)");
          setButtonTextColor("##9E9E9");
            return <>{children}</>;
          }
  };


  return (
    <div>
      <Logos
        h3=<h3>Snap a Foto <br></br> From Behind</h3>
        textNormal=<p>Take a side-view picture of the dog (see example below):</p>
        start="3"
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

      <NewFrame
        text={name}
        caption={caption}
        imageDog={"/assets/images/Back.png"}
        className="dogImage2"
        image=<img src={preview} className="imageSmall"/>
        design={design}
        frameDesign={frameDesign}
        icon=<img src={"/assets/images/close-circle.png"} style={mystyle} onClick={(e) => {functionTwo(e)}}/>
        button=<button onClick={handleClick} className="button">
        <img src={"/assets/images/Vector.png"} style={iconStyle}/>
                  {" "}
                  Add a photo{" "}
              </button>
      />

      {/* <Frame
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
      /> */}
      {/* <div className="example">
      <img src={"/assets/images/dog_side.jpeg"}/>
      </div> */}

      <div className="buttonBox">
      <Link to="/upload1" style={{ textDecoration: "none" }}>
      <Button width="104px" bcolor="white" height="40px" color="#0A0A0B" className="buttonNav1" border="1px solid #000000"  >
        {" "} 
        Back{" "}
      </Button>
      </Link>

      <ConditionalLink>
      <Button width="104px" bcolor={buttonColor} height="40px" color={buttonTextColor} className="buttonNav1" border="0px"  >
        {" "}
        Next{" "}
      </Button>
      </ConditionalLink>

      </div>

      </div>
  );
};

export default Upload;
