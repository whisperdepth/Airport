import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./search/Search";
import Board from "./board/Board";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <BrowserRouter>
          <Search />
          <Board />
        </BrowserRouter>
      </div>
    </Provider>
  );
};
export default App;
