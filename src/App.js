import "./App.scss";
import React, { Component } from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/GameBoard/GameBoard";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
  }

  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
  };

  render() {
    return (
      <main className="game game__wrap" role="main">
        <div className="container">
          <Header newGame={this.newGame} />
          <GameBoard />
        </div>
      </main>
    );
  }
}
