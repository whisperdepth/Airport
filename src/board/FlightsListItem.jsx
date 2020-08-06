import React from "react";
import moment from "moment";

export const FlightsListItem = ({
  term,
  time,
  city,
  status,
  airlineLogo,
  airlineName,
  flightNum,
}) => {
  
  return (
    <li className="flights-list__item">
      <span className="small-field">{term}</span>
      <span className="small-field">{moment(time).format("HH:mm")}</span>
      <span className="medium-field">{city}</span>
      <span className="medium-field">{status}</span>
      <div className="large-field">
        <img className="airline-logo" src={airlineLogo} alt="logo" />
        <span className="airline-text">{airlineName}</span>
      </div>
      <span className="medium-field">{flightNum}</span>
    </li>
  );
};

export default FlightsListItem;
