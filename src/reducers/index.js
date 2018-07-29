import * as actions from "../actions";

const initialState = {
  guesses: [],
  feedback: "Make your guess!",
  auralStatus: "",
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export const hotColdReducer = (state = initialState, action) => {
  if (action.type === actions.NEW_GAME) {
    return Object.assign({}, state, initialState);
  } else if (action.type === actions.MAKE_GUESS) {
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess]
    });
  } else if (action.type === actions.DISPLAY_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    });
  } else if (action.stype === actions.AURAL_STATUS) {
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    });
  }
  return state;
};
