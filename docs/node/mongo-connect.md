---
title: Connect Express App to MongoDB
---

## With Mongo Client

```js title='services/client.js'
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority';

// Create a new mongo client
const client = new MongoClient(uri);

async function run() {
  try {
    // connect the client to the server
    await client.connect();

    // establish and verify connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
  } finally {
    // ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
```

## With Mongoose

```js title='services/client.js'
const mongoose = require('mongoose');

require('dotenv').config();

// connection uri example "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";
const MONGO_URI = process.env.DATABASE_URI;

mongoose.connection.once('open', () => {
  console.log(`MongoDB connection ready!`);
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URI);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
```
