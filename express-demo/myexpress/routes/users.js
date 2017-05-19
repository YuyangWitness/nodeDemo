var express = require('express');
var path = require('path');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  const options = {
    root: path.join(__dirname + "/../views/")
  };
  res.sendFile('users.html',options);
});

module.exports = router;
