import React from "react";
import "./Logos.css";

const Logos = props => {

  const isList = props.list;
  const listStyle = {
      display: isList ? 'block' : 'none'
      

    };

    const textStyle = {
        display: isList ? 'none' : 'block',
        fontSize: "14px",
        lineHeight: "23.8px",
        textAlign:'center'

      };


  return (

<div className="header">
      <div className="logos" >
        <img src={"/assets/images/tech4logo.png"} className="image" />
        {/* <img src={"/assets/images/staylogo.png"} className="image" /> */}
      </div>

      <div>
        {props.h3}
        <div className="mainText">
        <ol start={props.start} style = {listStyle}>
           <li>
        {props.textNormal}
           </li>
        </ol>

         <div style = {textStyle}>  {props.textNormal}   </div>
        </div>
      </div>
</div>


  );
};

export default Logos;
