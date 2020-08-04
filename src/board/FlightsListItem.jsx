import React from "react";

export const FlightsListItem = ({
  terminal,
  localTime,
  destination,
  status,
  airline,
  flight,
}) => {
  return (
    <li className="flights-list__item">
      <span className="small-field">{terminal}</span>
      <span className="small-field">{localTime}</span>
      <span className="medium-field">{destination}</span>
      <span className="medium-field">{status}</span>
      <span className="large-field">{airline}</span>
      <span className="medium-field">{flight}</span>
    </li>
  );
};

export default FlightsListItem;
