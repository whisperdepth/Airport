import React from "react";
import Search from "./search/Search";
import Board from "./board/Board";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Search />
        <Board />
      </BrowserRouter>
    </div>
  );
};
export default App;
