const GameDAO = require("../daos/game.dao");
const { colorMap } = require("../utils/colorMap");
const randomWord = require("random-word-by-length");
exports.create = async (req, res) => {
  console.log("here");
  const wordToGuess = randomWord(5);
  console.log(wordToGuess);

  const game = {
    userId: req.body.userId,
    wordToGuess: wordToGuess,
    won: false,
  };
  try {
    const gameCreated = await GameDAO.create(game);
    if (gameCreated) res.send(gameCreated);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

exports.guess = async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await GameDAO.get(gameId);
    if (!game)
      return res.status(404).send({
        message: "No Game Found",
      });
    if (game.attempt >= 6)
      return res.status(400).send({
        message: "Game Ended",
      });
    if (game.won)
      return res.status(400).send({
        message: "Game Ended",
      });
    const updates = {};
    updates.lastGuess = req.body.guess;
    updates.attempt = game.attempt ? game.attempt + 1 : 1;
    updates.won = game.wordToGuess == updates.lastGuess;
    const map = colorMap(game.wordToGuess, updates.lastGuess);
    const response = {};
    const _updatedGame = await GameDAO.update(updates, game.id);
    response.won = updates.won;
    response.colorMap = map;
    res.json(response);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial.",
    });
  }
};
