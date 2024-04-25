import React from "react";
import "../../../global.css";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-body">
          <img
            src={props.cardImage}
            alt="card-image"
            width={100}
            height={100}
          />
          <h3 className="card-title">{props.title}</h3>
          <p className="card-desc">{props.desc}</p>
        </div>
        <button className="card-button">View Details</button>
      </div>
    </>
  );
};

export default Card;
