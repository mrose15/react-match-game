import React from "react";
import Card from "../Card/Card";
import villagers from "../../data/data.js";
import { v4 as uuidv4 } from "uuid";

export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.firstGuess = "";
    this.secondGuess = "";
    this.previousTarget = null;
    this.delay = 1200;
    this.totalScore = 0;
    this.key = "";
    this.state = {
      //duplicate array
      villagers: villagers.concat(villagers),
    };
  }

  //reset guesses and counts to original values and removes styles
  resetGuesses = () => {
    this.firstGuess = "";
    this.secondGuess = "";
    this.count = 0;

    const selected = document.querySelectorAll(".game__card--selected");
    selected.forEach((card) => {
      card.classList.remove("game__card--selected");
    });
  };

  //check for matches in selected cards
  matchCheck = () => {
    const selected = document.querySelectorAll(".game__card--selected");

    selected.forEach((card) => {
      card.classList.add("game__card--match");
    });
  };

  scoreKeeper = () => {
    const score = document.querySelector(".score");
    this.totalScore++;
    score.textContent = `${this.totalScore}`;
  };

  cardSelect = (event) => {
    //clicked item
    let clicked = event.target;

    //only select divs, not entire grid
    if (
      clicked.classList.contains("game__container") ||
      clicked === this.previousTarget ||
      clicked.parentNode.classList.contains("game__card--selected") ||
      clicked.parentNode.classList.contains("game__card--match")
    ) {
      return;
    }

    //add selected class
    if (this.count < 2) {
      this.count++;
      if (this.count === 1) {
        //assign first guess
        this.firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("game__card--selected");
      } else {
        //assign second guess
        this.secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add("game__card--selected");
      }

      //check if guess variables are empty
      if (this.firstGuess !== "" && this.secondGuess !== "") {
        if (this.firstGuess === this.secondGuess) {
          setTimeout(this.matchCheck, this.delay);
          setTimeout(this.resetGuesses, this.delay);
          this.scoreKeeper();
        } else {
          setTimeout(this.resetGuesses, this.delay);
        }
      }
      this.previousTarget = clicked;
    }
  };

  render() {
    const { villagers } = this.state;

    //shuffle cards
    villagers.sort(() => 0.5 - Math.random());

    return (
      <React.Fragment>
        <div className="game__container" onClick={this.cardSelect}>
          {villagers.map((villager) => (
            <Card
              key={uuidv4()}
              cardDataset={villager.name}
              cardBackAlt={villager.alt}
              cardBackgroundImg={villager.img}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
