import React from "react";
import BoardBtns from "./board-elems/BoardBtns";
import FlightsList from "./flights-list/FlightsList";

const Board = () => {
  return (
    <div className="board">
      <BoardBtns />
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
