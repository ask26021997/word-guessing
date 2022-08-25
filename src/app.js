const express = require("express");
const bodyParser = require("body-parser");

const correctWord = "anand";

const app = express();

app.use(bodyParser.json());
app.post("/words", (req, res) => {
  const { word } = req.body;
  if (word == correctWord) return res.status(200).json({ gameResult: true });
  return res.status(200).json({ gameResult: false });
});

app.listen(5000);
