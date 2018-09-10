// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete many
  // db.collection('Todos').deleteMany({ text : "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({ text : "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed : false }).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  db.collection('Users').deleteMany({ name : "Andrew"}).then((result) => {
    console.log(result);
  });

  // deleteMany
  db.collection('Users').findOneAndDelete({ _id : new ObjectID("5b966cee7c72f117bc3e6e1c")}).then((result) => {
    console.log(result);
  });

  // db.close();
});
