module.exports = (app) => {
  const games = require("../controllers/game.controller");

  var router = require("express").Router();

  router.post("/", games.create);
  // router.get("/:gameId", games.guess);
  router.put("/:gameId", games.guess);

  app.use("/api/games", router);
};
