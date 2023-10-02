import React from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";

import "./App.scss";

const App = () => {
  return (
    <main className="game game__wrap">
      <div className="container">
        <Header />
        <GameBoard />
      </div>
    </main>
  );
};

export default App;
