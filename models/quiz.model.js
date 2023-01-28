const mongoose= require('mongoose')


const QuizSchema = mongoose.Schema({
    category:{type : String , required:true },
    difficulty:{type : String , required:true},
    question:{type : String , required:true},
    correct:{type : String , required:true},
    options:[]



})

const QuizModel = mongoose.model('quizs', QuizSchema)

module.exports={
    QuizModel
} 