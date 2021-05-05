//CRUD create read update delete

// const mongodb = require('mongodb');

// //Required for connection to the database
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectId, ObjectID} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName= 'task-manager';

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log('Unable to connect to the database');
    }
    console.log('Connected correctly');
    const db = client.db(databaseName);
    db.collection('users').findOne({_id: new ObjectID("609252b64a8ec5163333f8fa")},(error, user) => {
        if (error){
            return console.log('Unable to fetch');
        }
        console.log(user);
    })
    //find returns a cursor of the value found
    db.collection('users').find({ age: 31 }).toArray((error,users)=>{
        console.log(users);
    })
    db.collection('users').find({ age: 31 }).count((error,users)=>{
        console.log(users);
    })
})

