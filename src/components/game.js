import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./status-section";
import InfoSection from "./info-section";
import store from "../store";

import { newGame, makeGuess, displayFeedback, auralStatus } from "../actions";

export class Game extends React.Component {
  newGame() {
    this.props.dispatch(newGame());
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.props.dispatch(displayFeedback("Please enter a valid number"));
      return;
    } else {
      this.props.dispatch(makeGuess(guess));
    }

    const difference = Math.abs(guess - this.props.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You got it!";
    }

    this.props.dispatch(displayFeedback(feedback));
    console.log(store.getState());
  }

  generateAuralUpdate() {
    const { guesses, feedback } = this.props;

    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${
      guesses.length
    } ${pluralize ? "guesses" : "guess"}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${
        pluralize ? "In order of most- to least-recent, they are" : "It was"
      }: ${guesses.reverse().join(", ")}`;
    }

    this.props.dispatch(auralStatus(auralStatus));
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.newGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} auralStatus={auralStatus} />
          <InfoSection />
        </main>
      </div>
    );
  }
}

Game.defaultProps = {
  guesses: [],
  feedback: "",
  auralStatus: "",
  correctAnswer: 0
};

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);
