import React from "react";

const Search = () => {
  return (
    <div className="search">
      <span className="search__text">SEARCH FLIGHT </span>
      <form className="search-form">
        <div className="input-container">
          <i className="fas fa-search"></i>
          <input
            type="text"
            className="input"
            placeholder=" Airline, destination or flight #"
          />
        </div>
        <button className="input-btn">SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
