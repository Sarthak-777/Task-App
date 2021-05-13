const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks',async(req,res)=> {
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201)
        res.send(task)
    }
    catch(e){
        res.status(400)
        res.send(e)
    }

    // task.save().then(()=>{
    //     res.status(201)
    //     res.send(task)
    // }).catch((e)=> {
    //     res.status(400)
    //     res.send(e)
    //     console.log(e)
    // })
})

router.get('/tasks',async(req,res)=>{
    try{
        task = await Task.find({})
        res.send(task)
    }
    catch(e){
        res.status(500).send()
        console.log(e)
    }

    // Task.find({}).then((task)=>{
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

router.get('/tasks/:id',async (req,res)=>{
    const _id = req.params.id
    try{
        task = await Task.findById(_id)
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send()
    }
    // Task.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

router.delete('/tasks/:id', async (req,res)=>{
    try{
        task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send()
    }
})


router.patch('/tasks/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid Updates'})
    }
    try{
        task = await Task.findById(req.params.id)
        update.forEach((update) => {
            task[update] = req.body[update]
        });
        await task.save()
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router