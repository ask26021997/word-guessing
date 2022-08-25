const db = require("../models");
const Game = db.games;

exports.create = async (game) => {
  return await Game.create(game);
};

exports.get = async (gameId) => {
  return await Game.findOne({ where: { id: gameId } });
};

exports.update = async (updates, gameId) => {
  const result = await Game.update(updates, {
    where: { id: gameId },
    returning: true,
    plain: true,
  });

  if (!result) return "err";

  if (result[1] == 1) {
    return await exports.get(gameId);
  }
};
