// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // finOneAndUpdate
  // db.collection('Todos').findOneAndUpdate(
  //       {_id : new ObjectID("5b96dcc5b6c4c02334bfe0cd") },
  //       { $set : {  completed : true} },
  //       { returnOriginal : false }
  //       ).then((result) => {
  //         console.log(result);
  //       });


        db.collection('Users').findOneAndUpdate(
              {_id : new ObjectID("5b9666060dcd3107900ef9ce") },
              { $set : {  name : "Luca"},
                $inc: { quantity: 1, "age": 1 } },
              { returnOriginal : false }
              ).then((result) => {
                console.log(result);
              });


  // db.close();
});
