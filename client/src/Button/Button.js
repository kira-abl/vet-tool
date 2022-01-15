import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div>
      <button onClick={props.function} className={props.className}>
        {" "}
        {props.children}{" "}
      </button>
    </div>
  );
};

export default Button;
