import React from "react";
import "../../../global.css";

const SButton = (props) => {
  return (
    <>
      <div className="button--secondary" id="button--secondary">
        {props.content}
        <svg
          fill="#ffff"
          height="15px"
          width="30px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlSpace="preserve">
          <path
            id="XMLID_27_"
            d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
          />
        </svg>
      </div>
    </>
  );
};

export default SButton;
