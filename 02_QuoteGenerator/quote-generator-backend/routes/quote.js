const express = require("express");
const router = express.Router();
const Quote = require("../models/quote");

router.get("/", (req, res) => {
  Quote.find()
    .then((quotes) => {
      res.json(quotes);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const { title, author } = req.body;
  const newQuote = new Quote({
    title,
    author,
  });

  newQuote
    .save()
    .then(() => res.json("Quote added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
