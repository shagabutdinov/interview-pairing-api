var express = require('express');
var router = express.Router();
var items = require('../items.json');

/* GET search results. */
router.get('/', function(req, res, next) {
  res.json(null);
});

module.exports = router;
