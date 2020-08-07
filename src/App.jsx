import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Search from "./search/Search";
import Board from "./board/components/Board";

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
