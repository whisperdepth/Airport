import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import FlightsListItem from "./FlightsListItem";
import { departureSelector, arrivalSelector } from "../flights.selectors";
import * as flightsActions from "../flights.actions";

const mapFlightList = (flightList) =>
  flightList.map((flight) => (
    <FlightsListItem key={flight.flightNum} {...flight} />
  ));

const FlightsList = ({ departure, arrival, setFlightsToStase }) => {
  useEffect(() => {
    setFlightsToStase()
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/departures">
          <ul className="flights-list">{mapFlightList(departure)}</ul>
        </Route>
        <Route path="/arrivals">
          <ul className="flights-list">{mapFlightList(arrival)}</ul>
        </Route>
        <Route path="*">
          <div className="no-results">
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

const mapDispatch = {
  setFlightsToStase: flightsActions.setFlightsToStase,
};

export default connect(mapState, mapDispatch)(FlightsList);
