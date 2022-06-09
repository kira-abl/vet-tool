import React from "react";
import "./Frame.css";

const Frame = props => {
  return (

    <div className={props.frameDesign}>
      <div className="innerFrame" >
        <div className="elipse" >
          <img src={"/assets/images/icon.png"} />

        </div>
          <div style={{ textAlign: "center" }} >
        <p className="text">
        {props.text}  </p>
        </div >
      </div >

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


    {props.button}

</div>
  );
};

export default Frame;
