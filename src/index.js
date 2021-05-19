const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express();
const port = process.env.PORT

// app.use((req,res, next)=>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })

// app.use((req, res, next)=>{
//     res.status(503).send('The site is under maintenance. Try again after few hours')
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         // cb(new Error('File must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//         if (!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req,res)=>{
//     res.send()
// }, (error, req, res, next)=>{
//     res.status(400).send({
//         error : error.message
//     })
// })

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

const jwt = require('jsonwebtoken')

app.listen(port, ()=>{
    console.log('Server is running on port '+port);
})

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' },'thisismynewcourse')
//     const data = jwt.verify(token, 'thisismynewcourse')
// }

// // myFunc

// const Tasks = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Tasks.findById('609e5925b0c8692ef8457cc5')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('609e58dab0c8692ef8457cc2')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

