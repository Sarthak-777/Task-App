//CRUD create read update delete

const mongodb = require('mongodb');

//Required for connection to the database
const MongoClient = mongodb.MongoClient;

const connectionUrl = `mongoDb://127.0.0.1:27017`;
const databaseName= `task-manager`;

