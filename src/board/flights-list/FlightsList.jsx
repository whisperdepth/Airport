import React from "react";
import FlightsListItem from "./flights-list-item/FlightsListItem";

const flightsListD = [
  {
    terminal: "A",
    localTime: "0:45",
    destination: "Lviv",
    status: "departed",
    airline: "Fly Away",
    flight: "q123",
  },
  {
    terminal: "B",
    localTime: "4:00",
    destination: "Odessa",
    status: "departed",
    airline: "Fly Away",
    flight: "w456",
  },
  {
    terminal: "D",
    localTime: "18:30",
    destination: "Uzhorod",
    status: "departed",
    airline: "Fly Away",
    flight: "e678",
  },
];

const FlightsList = () => {
  return (
    <ul className="flights-list">
      {flightsListD.map((flight) => (
        <FlightsListItem key={flight.flight} {...flight} />
      ))}
    </ul>
  );
};

export default FlightsList;
