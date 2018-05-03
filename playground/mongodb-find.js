//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5ae9700b9726271cbcdcde46')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //     console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Leo'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //client.close();
});

// function factorial(n) {
//   console.log('param: ', n);
//   if(n > 1) {
//     return n * factorial(n - 1);
//   } else {
//     return n;
//   }
// }
//
// console.log('result: ', factorial(4));
