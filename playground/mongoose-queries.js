const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5b9cc40faf9f9e8034f994f111';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid')
// }
// var id = '5b9cc40faf9f9e8034f994f1';

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// }).catch((e) => console.log(e))
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// }).catch((e) => console.log(e))

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("id not found");
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

// query usercollection with id
var userId = '5b997830009755043c7f84ba';
User.findById(userId).then((user) => {
  if(!user){
    return console.log("user not found");
  }
  console.log('User', user);
}).catch((e) => console.log(e));
