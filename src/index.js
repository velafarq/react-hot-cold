import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Game from "./components/game";
import store from "./store";
import { newGame, makeGuess } from "./actions";

import "./reset.css";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,

  document.getElementById("root")
);
store.dispatch(newGame());
// store.dispatch(makeGuess(2));
console.log(store.getState());
