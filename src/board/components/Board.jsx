import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import FlightsList from "./FlightsList";

const Board = () => {
  const location = useLocation();

  const depButtonClasses = classNames("table-btn departures", {
    "chosen-btn": location.pathname.includes("/departures"),
  });
  const arrButtonClasses = classNames("table-btn arrivals", {
    "chosen-btn": location.pathname.includes("/arrivals"),
  });

  return (
    <div className="board">
      <div className="board__btns">
        <Link to={`/departures${location.search}`} className="link">
          <button className={depButtonClasses}>DEPARTURES</button>
        </Link>
        <Link to={`/arrivals${location.search}`} className="link">
          <button className={arrButtonClasses}>ARRIVALS</button>
        </Link>
      </div>
      <div className="field-names">
        <span className="small-field">Terminal</span>
        <span className="small-field">Local time</span>
        <span className="medium-field">Destination</span>
        <span className="medium-field">Status</span>
        <span className="airline">Airline</span>
        <span className="medium-field">Flight</span>
      </div>
      <FlightsList />
    </div>
  );
};

export default Board;
