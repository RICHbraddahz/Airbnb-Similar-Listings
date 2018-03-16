const { generateTenMilSimilarListings } = require('./haiDataGenerator');
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const database = 'seabnb';

// Use connect method to connect to the server
console.log('JUST ABOUT TO CONNECT TO ', database);
MongoClient.connect(`${url}`)
  .then((client) => {
    const db = client.db(database);
    const collection = db.collection('similar-listings');

    const startTime = new Date().getTime();
    console.log('SEEDINGGGGGG SEEDINGGGGGGG');
    console.log('SEEDINGGGGGG SEEDINGGGGGGG');
    console.log('SEEDINGGGGGG SEEDINGGGGGGG');

    generateTenMilSimilarListings(collection, startTime)
      .then(() => {
        console.log('CONGRATS YOU JUST SEEDED 10MILLION');
        client.close();
      });
  })
  .catch((e) => {
    console.error(e);
  });
