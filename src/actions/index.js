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

export const GENERATE_AURAL_UPDATE = "GENERATE_AURAL_UPDATE";
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});
