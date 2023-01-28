const express = require('express')
const { UserModel } = require('../models/user.model')

const UserRouter = express.Router()


UserRouter.get('/',async(req,res)=>
{
    // res.send('You are user home page')
    const users = await UserModel.find()
    res.send(users)
})



UserRouter.post('/register',async(req,res)=>
{
    const {name,difficulty,category,question }= req.body
    console.log(req.body)

    const userPresent = await UserModel.findOne({name:name})
    if(userPresent?.name)
    {
        res.send({ msg: "Try Different Name" })
    }
    else{
        try{
        const user = await UserModel({name,difficulty, question, category})
        await user.save()
        res.send({ msg: "New User",user} )

        }
        catch(err)
        {
            console.log(err)
            res.send({msg:"error in signup"})

        }

    }


})




UserRouter.patch('/edit/:ID',async(req,res)=>
{
    const ID= req.params.ID
    const payload={
        correct, incorrect
    }
    const user = await UserModel.findByIdAndUpdate(ID,payload)

})













module.exports={
    UserRouter
}