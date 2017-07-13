var express = require('express');


var db = require('mongoskin').db('mongodb://localhost:27017/Cms', {native_parser:true});


var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {


  db.collection('myCollection').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);

    res.json(result);
  });


  var id = req.params.id;

  console.log("id",req.params.id);


  var resObj = {
      id:id,
      code:200,
      name:'zhangSan',
      msg:'respond with a resource'+new Date().getTime()
  }

  

  // res.send('respond with a resource');
});


router.get('/', function(req, res, next) {


    res.send('all users page ');
});



module.exports = router;
