import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlightsList from "./FlightsList";

const Board = () => {
  const [isDepActive, setDepActive] = useState(false);
  const [isArrActive, setArrActive] = useState(false);

  const onDepClick = () => {
    setDepActive(true);
    setArrActive(false);
  };

  const onArrClick = () => {
    setDepActive(false);
    setArrActive(true);
  };

  const depButtonClasses = `table-btn departures ${
    isDepActive ? "chosen-btn" : ""
  }`;
  const arrButtonClasses = `table-btn arrivals ${
    isArrActive ? "chosen-btn" : ""
  }`;

  return (
    <div className="board">
      <div className="board__btns">
        <Link to="/departures" className="link">
          <button onClick={onDepClick} className={depButtonClasses}>
            DEPARTURES
          </button>
        </Link>
        <Link to="/arrivals" className="link">
          <button onClick={onArrClick} className={arrButtonClasses}>
            ARRIVALS
          </button>
        </Link>
      </div>
      <div className="field-names">
        <span className="small-field">Terminal</span>
        <span className="small-field">Local time</span>
        <span className="medium-field">Destination</span>
        <span className="medium-field">Status</span>
        <span className="large-field">Airline</span>
        <span className="medium-field">Flight</span>
      </div>
      <FlightsList />
    </div>
  );
};

export default Board;
