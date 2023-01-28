const express = require('express')

const QuizRouter = express.Router()
const { QuizModel } = require('../models/quiz.model')


QuizRouter.get('/', async(req,res)=>
{
    const allQuestion = await QuizModel.find()
    res.send(allQuestion)
})


QuizRouter.post('/create',async(req,res)=>
{
    const {category, difficulty, question, correct, options }= req.body
    

    try{
        const newQuestion = await QuizModel({category, difficulty, question, correct, options})
    await newQuestion.save()
    res.send({"msg":"Success"})
    }
    catch(err)
    {
        console.log({"msg":"Error"})
    }

})


QuizRouter.get('/question/:category/:limit/:difficulty/:skipvalue', async(req,res)=>{
    // const {category, difficulty, limit}=req.body
    const category = req.params.category
    const limit =  1
    const difficulty = req.params.difficulty
    const skipvalue=req.params.skipvalue || 0
    




    try{
        if(category && limit && difficulty)
        {
            const question = await QuizModel.find({category, difficulty, category}).limit(limit).skip(skipvalue)
            res.send({"msg":'Success',question})
        }
    }
    catch(err)
    {
        console.log({"msg":"Error"})
    }

})























module.exports={
    QuizRouter
}