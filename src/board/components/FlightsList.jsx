import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import FlightsListItem from "./FlightsListItem";
import { departureSelector, arrivalSelector } from "../flights.selectors";

const mapFlightList = (flightList) =>
  flightList.map((flight) => (
    <FlightsListItem key={flight.flightNum} {...flight} />
  ));

const FlightsList = ({ departure, arrival }) => {
  if (departure.length === 0 && arrival.length === 0) {
    return <div className="no-results"> No flights found by your request</div>;
  }
  return (
    <>
      <Switch>
        <Route path="/departures">
          <ul className="flights-list">{mapFlightList(departure)}</ul>
        </Route>
        <Route path="/arrivals">
          <ul className="flights-list">{mapFlightList(arrival)}</ul>
        </Route>
        <Route path="*">
          <div className="page-loaded">
            Select departures or arrivals. Then use a search field.
          </div>
        </Route>
      </Switch>
    </>
  );
};

const mapState = (state) => {
  return {
    departure: departureSelector(state),
    arrival: arrivalSelector(state),
  };
};

export default connect(mapState)(FlightsList);
