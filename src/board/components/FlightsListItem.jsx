import React from "react";
import moment from "moment";

export const FlightsListItem = ({
  term,
  time,
  city,
  status,
  airlineName,
  flightNum,
}) => {
  return (
    <li className="flights-list__item">
      <span className="small-field">{term}</span>
      <span className="small-field">{moment(time).format("HH:mm")}</span>
      <span className="medium-field">{city}</span>
      <span className="medium-field">{status}</span>
      <span className="airline">{airlineName}</span>
      <span className="medium-field">{flightNum}</span>
    </li>
  );
};

export default FlightsListItem;
