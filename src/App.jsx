import React from "react";
import Search from "./search/Search";
import Board from './board/Board'

const App = () => {
  return (
    <div className="main">
      <Search />
      <Board/>
    </div>
  );
};
export default App;
