import React from "react";
import "../../../global.css";

const PButton = (props) => {
  return (
    <>
      <div className="button">{props.content}</div>
    </>
  );
};

export default PButton;
