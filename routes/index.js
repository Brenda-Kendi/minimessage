var express = require('express');
const { render } = require('../app');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message', messages : messages});
});
//sending post data to the server backend
router.post('/new', function(req,res){

  //creating new message
  let message = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }
  messages.unshift(message);
  res.render('index', { title: 'Mini Message', messages : messages});
  res.redirect('/')
})
module.exports = router;
