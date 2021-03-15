import React from "react";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import bells from "../../assets/bell.png";

export default function Header() {
  return (
    <header className="game__header">
      <div className="game__logo">
        <img src={logo} alt="Animal Crossing New Horizons Logo" />
      </div>
      <div className="game__score-wrap">
        <div className="game__btn">
          <Button
            variant="primary"
            size="lg"
            aria-label="New Game"
            aria-labelledby="new-game"
            handleChange={this.props.newGame}
          >
            New Game
          </Button>
        </div>
        <div className="game__score">
          <img src={bells} alt="Animal Crossing Bell Bag" />
          <span className="score">0</span>
          <span className="game__score--text">Bells</span>
        </div>
      </div>
    </header>
  );
}
