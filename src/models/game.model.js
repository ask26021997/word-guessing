const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Game = sequelize.define("Game", {
    userId: DataTypes.NUMBER,
    wordToGuess: DataTypes.STRING(5),
    lastGuess: DataTypes.STRING(5),
    attempt: DataTypes.NUMBER,
    won: DataTypes.BOOLEAN,
  });
  return Game;
};
