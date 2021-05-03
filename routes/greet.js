var express = require('express');
var router = express.Router();

/* GET greet listing. */
router.get('/', function(req, res, next) {
  res.send('wellcome hello sanjay');
  
});

module.exports = router;