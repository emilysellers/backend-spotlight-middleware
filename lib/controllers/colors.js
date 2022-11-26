const { Router } = require('express');
const colors = require('../middleware/colors');
const blue = require('../middleware/blue');
const red = require('../middleware/red');
const yellow = require('../middleware/yellow.js');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [colors, red, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/orange', [colors, red, yellow], (req, res) => {
    res.json(req.colors);
  })
  .get('/green', [colors, yellow, blue], (req, res) => {
    res.json(req.colors);
  });
