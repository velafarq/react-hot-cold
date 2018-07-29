export const NEW_GAME = "NEW_GAME";
export const newGame = g => ({
  type: NEW_GAME
});

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

export const DISPLAY_FEEDBACK = "DISPLAY_FEEDBACK";
export const displayFeedback = feedback => ({
  type: DISPLAY_FEEDBACK,
  feedback
});

export const AURAL_STATUS = "AURAL_STATUS";
export const auralStatus = auralStatus => ({
  type: AURAL_STATUS,
  auralStatus
});
