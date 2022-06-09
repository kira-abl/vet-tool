import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div>
      <button onClick={props.function} className={props.className} style={{ width: props.width, backgroundColor: props.bcolor, height: props.height, color: props.color, border: props.border}}>
        {" "}
        {props.children}{" "}
      </button>
    </div>
  );
};

export default Button;
