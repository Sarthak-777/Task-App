require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('60950a0143f1b932325cacd0',{age: 19}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 19})
}) .then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})