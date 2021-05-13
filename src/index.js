const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000

// app.use((req,res, next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })

app.use((req, res, next)=>{
    res.status(503).send('The site is under maintenance. Try again after few hours')
})

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')

app.listen(port, ()=>{
    console.log('Server is running on port '+port);
})

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' },'thisismynewcourse')
    console.log(token)
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()

