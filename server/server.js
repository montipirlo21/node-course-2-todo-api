var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {

  var todo = new Todo({
     text : req.body.text
  });

  todo.save().then((doc)=> {
    res.send(doc);
  }, (e) => {
    res.send(e);
  });

})


app.post('/users', (req, res) => {

  var user = new User({
     text : req.body.email
  });

  user.save().then((doc)=> {
    res.send(doc);
  }, (e) => {
    res.send(e);
  });

})



app.listen(3000, () => {
  console.log('Started on port 3000')
});





// var newTodo = new Todo({
//    text : '  Cook dinner    '
// });

// var newTodo = new Todo({
//   text : 'Cook breakfast',
//   completed : false,
//   completedAt : 123
// });

// newTodo.save().then((doc)=> {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo', e)
// });

// User model

// var newUser = new User({
//    email : 'davide.monticelli@hotmail.it'
// });
//
// newUser.save().then((doc)=> {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo', e)
// });
