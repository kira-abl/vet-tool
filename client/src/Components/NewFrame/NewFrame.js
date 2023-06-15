import React from "react";
import "./NewFrame.css";

const NewFrame = props => {
  return (

    <div>
    <div className="dogFrame" >
        <div>
          <img src={props.imageDog} className={props.className}      />
        </div>
    </div >

    {props.button}

    {/* <div style={{ textAlign: "center" }} >
    <p className="text">
    {props.text}
    </div > */}

      <div className={props.design}>

        <div style={{height: "100%" }} >
          {props.image}
        </div >
        <div style={{ padding: "10px", minWidth: "33%", textAlign: "left" }} >
          <p className="text" style={{ fontSize: "10px" }}>
          {props.caption}  </p>
        </div >
        <div >
          {props.icon}
        </div >
      </div>


    

</div>
  );
};

export default NewFrame;
