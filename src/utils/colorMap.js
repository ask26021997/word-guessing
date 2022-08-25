const color = Object.freeze({
  correct: "GREEN",
  wrong: "YELLOW",
  invalid: "RED",
});

exports.colorMap = (correct, guessed) => {
  const map = [];

  for (let ind in guessed) {
    if (guessed[ind] == correct[ind]) {
      map[ind] = color.correct;
    } else if (correct.includes(guessed[ind])) {
      map[ind] = color.wrong;
    } else {
      map[ind] = color.invalid;
    }
  }

  return map;
};
