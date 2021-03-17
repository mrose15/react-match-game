import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import villagers from "./data/data.js";

const App = () => {
  const allVillagers = villagers.concat(villagers);

  const newGame = () => {
    const allMatched = document.querySelectorAll(".game__card--match");
    const totalScore = 0;
    const score = document.querySelector(".score");
    score.textContent = `${totalScore}`;

    allMatched.forEach((card) => {
      card.classList.remove("game__card--match");
    });

    allVillagers.sort(() => 0.5 - Math.random());
  };

  return (
    <main className="game game__wrap" role="main">
      <div className="container">
        <Header newGame={newGame} />
        <GameBoard />
      </div>
    </main>
  );
};

export default App;
