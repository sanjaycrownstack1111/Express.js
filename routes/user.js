var express = require('express');
var router = express.Router();


/* GET greet listing. */






router.post('/', function(req, res, next) {
  res.send('creating');
  console.log(req.body);
  next();
});

router.put('/',function(req,res,next){
  res.send("updating")
  next();
});

router.get('/', function(req, res, next) {
    res.send('details');
    next();
});

router.get('/', function(req, res, next) {
  res.send('get users');
  next();
});

router.get('/:id',function(req,res,next){
  const id = req.params.id;
  res.send({id: req.params.id, body: req.body})
  next();
});

router.delete('/:id', function(req, res, next) {
    res.send('delete');
    next();
});

module.exports = router;