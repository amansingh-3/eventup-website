import React from "react";
import "../../../global.css";

const PButton = (props) => {
  return (
    <>
      <a href="#" className="button">
        {props.content}
      </a>
    </>
  );
};

export default PButton;
