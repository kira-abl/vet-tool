import React from "react";
import "./Container.css";

const Container = props => {
  return (
    <div className={props.className}>
      <p> {props.children} </p>
    </div>
  );
};

export default Container;
