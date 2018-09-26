﻿const { ObjectID } = require('mongodb');
const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'davide.monticelli@hotmail.it',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'davide.monticelli@outlook.it',
    password: 'userTwoPass'
}];

const populateUsers = (done) => {
    User.remove({}).then(() => {

        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);

    }).then(() => done());

};

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
},
{
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());

};

module.exports = { todos, populateTodos, users, populateUsers };