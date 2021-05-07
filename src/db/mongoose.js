const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        defaiult:0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            } 
        }
    }
})

const me = new User({
    name: '   Sarthak   ',
    email: 'TN.SARTHAK039@GMAIL.COM'
})

me.save().then(()=> {
    console.log(me)
}).catch((error)=>{
    console.log('Error',error)
})

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const firstTask = new Tasks({
    description: 'cleaning',
    completed: true
})

firstTask.save().then(()=> {
    console.log(firstTask);
}).catch((error)=>{
    console.log(error);
})