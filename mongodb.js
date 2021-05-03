//CRUD create read update delete

const mongodb = require('mongodb');

//Required for connection to the database
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName= 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected correctly');
    const db = client.db(databaseName);
    db.collection("users").insertMany([
        {
            name: 'Ben',
            age: 25
        },
        {
            name: 'Jake',
            age: 31
        }
    ], (error, result) => {
        if (error){
            return console.log('Unable to insert Docs');
        }
        console.log(result.ops)
    })
    db.collection("tasks").insertMany([
        {
            description: 'Cleaning',
            completion: true
        },
        {
            description: 'Designing',
            completion: false
        },
        {
            description: 'Learning',
            completed: true
        }
    ], (error, result) => {
        if (error){
            return console.log('Unable to insert tasks');
        }
        console.log(result.ops);
    })
})

