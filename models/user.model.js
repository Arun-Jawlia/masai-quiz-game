const mongoose= require('mongoose')


const UserSchema = mongoose.Schema({
   
    name:{type : 'string', required:true, unique:true},
    category:{type : 'string', required:true},
    difficulty:{type : 'string', required:true},
    question: {type : 'number', required:true},
    correction: {type : 'string'} || 0,
    incorrect: {type : 'string',} || 0
   


})

const UserModel = mongoose.model('user', UserSchema)

module.exports={
    UserModel
}