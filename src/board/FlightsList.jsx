import React from "react";
import FlightsListItem from "./FlightsListItem";
import { Route, Switch } from "react-router-dom";

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

const flightsListA = [
  {
    terminal: "C",
    localTime: "1:45",
    destination: "Madagascar",
    status: "departed",
    airline: "Fly Away",
    flight: "123",
  },
  {
    terminal: "E",
    localTime: "20:00",
    destination: "Maputu",
    status: "departed",
    airline: "Fly Away",
    flight: "456",
  },
  {
    terminal: "D",
    localTime: "22:00",
    destination: "Paris",
    status: "departed",
    airline: "Fly Away",
    flight: "678",
  },
];

const mapFlightList = (flightList) =>
  flightList.map((flight) => (
    <FlightsListItem key={flight.flight} {...flight} />
  ));

const FlightsList = () => {
  return (
    <>
      <Switch>
        <Route exact path="/departures">
          <ul className="flights-list">{mapFlightList(flightsListD)}</ul>
        </Route>
        <Route path="/arrivals">
          <ul className="flights-list">{mapFlightList(flightsListA)}</ul>
        </Route>
      </Switch>
    </>
  );
};

export default FlightsList;
