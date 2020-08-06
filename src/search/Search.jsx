import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import { arrivalSelector, departureSelector } from "../flights.selectors";
import * as flightsActions from "../flights.actions";

const Search = ({ arrival, departure, setFilteredFlights }) => {
  const location = useLocation();
  const search = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [inputText, setInputText] = useState(search.search || "");
  
  const arrivalFiltered = arrival.filter((flight) =>
    flight.airlineName.includes(inputText)
  );
  const departureFiltered = departure.filter((flight) =>
    flight.airlineName.includes(inputText)
  );

  const handleClick = () => {
    if (location.pathname === "/") return;

    setFilteredFlights(departureFiltered, arrivalFiltered);
    console.log(departureFiltered, arrivalFiltered);
  };

  useEffect(() => {
    console.log(1)
    setFilteredFlights(departureFiltered, arrivalFiltered);
  }, [inputText]);

  return (
    <div className="search">
      <span className="search__text">SEARCH FLIGHT </span>
      <form className="search-form">
        <div className="input-container">
          <i className="fas fa-search"></i>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            className="input"
            placeholder=" Airline, destination or flight #"
          />
        </div>
        <Link
          to={
            inputText && location.pathname !== "/"
              ? `?search=${inputText}`
              : "?"
          }
        >
          <button onClick={handleClick} className="input-btn">
            SEARCH
          </button>
        </Link>
      </form>
    </div>
  );
};

const mapState = (state) => {
  return {
    arrival: arrivalSelector(state),
    departure: departureSelector(state),
  };
};

const mapDispatch = {
  setFilteredFlights: flightsActions.setFilteredFlights,
};

export default connect(mapState, mapDispatch)(Search);
