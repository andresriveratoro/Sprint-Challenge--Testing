const express = require('express');

const server = express();

server.use(express.json());

server.post('/games', (req, res) => {
  const game = req.body;
  if (game.title && game.genre) {
    res.status(200).json(game);
  } else {
    res.status(422).json({ error: 'missing required fields' });
  }
});

server.get('/games', (req, res) => {
  const games = [];
  res.status(200).json(games);
});

module.exports = server;
