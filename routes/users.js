var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {

  var id = req.params.id;

  console.log("id",req.params.id);


  var resObj = {
      id:id,
      code:200,
      name:'zhangSan',
      msg:'respond with a resource'+new Date().getTime()
  }

  res.json(resObj);

  // res.send('respond with a resource');
});


router.get('/', function(req, res, next) {


    res.send('all users page ');
});



module.exports = router;
