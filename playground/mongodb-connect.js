//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   complete: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to isnert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // Insert new doc inti Users (name, age, location)
  // var user = {
  //   name : 'John',
  //   age: 25,
  //   location : 'Hong Kong'
  // }
  //
  // db.collection('Users').insertOne({
  //   user
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to isnert Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });
  client.close();
});
