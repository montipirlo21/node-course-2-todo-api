const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findByIdAndRemove('5b9cd0c27334dc2b7cb4ac9f').then((todo) => {
//    console.log(todo);
//});

Todo.findOneAndRemove({ text: 'Second test todo' }).then((todo) => {
    console.log(todo);
});