var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  times +=1
  res.send('Users accesses are: ${times}');
});

module.exports = router;
var times  = 0

