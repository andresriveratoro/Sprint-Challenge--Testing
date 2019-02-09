const express = require('express');

const server = express();

server.post('/games', (req, res) => {
  const game = {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  };
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
