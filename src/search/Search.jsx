import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import qs from "qs";
import { Link, useLocation } from "react-router-dom";
import * as flightsActions from "../board/flights.actions";
import * as searchActions from "./search.actions";
import { filterTextSelector } from "./search.selectors";

const Search = ({ setFilterText, filterText, setFlightsToState }) => {
  const location = useLocation();
  const search = qs.parse(location.search, { ignoreQueryPrefix: true });
  const filtertext = search.search || "";

  const handleClick = () => {
    if (location.pathname === "/") return;
    if (!filterText) return setFlightsToState("");

    setFlightsToState(filterText);
  };

  const inputText = useRef(null);

  useEffect(() => {
    setFlightsToState(filtertext);
    inputText.current.value = search.search;
  }, []);

  return (
    <div className="search">
      <span className="search__text">SEARCH FLIGHT </span>
      <form className="search-form">
        <div className="input-container">
          <i className="fas fa-search"></i>
          <input
            ref={inputText}
            value={filterText}
            onChange={(e) => {
              setFilterText(e.target.value);
            }}
            type="text"
            className="input"
            placeholder=" Airline, destination or flight #"
          />
        </div>
        <Link
          to={
            filterText && location.pathname !== "/"
              ? `?search=${filterText}`
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
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  setFilterText: searchActions.setSearchText,
  setFlightsToState: flightsActions.setFlightsToStase,
};
export default connect(mapState, mapDispatch)(Search);
