const express = require('express')
const { connection } = require('./config/db')
const cors = require('cors');
const { UserRouter } = require('./routes/user.route');
const { QuizRouter } = require('./routes/quiz.route');
const app = express()
require('dotenv').config();


app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>
{
    res.send('Hi Connections! You are on Home')
})

app.use('/user',UserRouter)
app.use('/quiz', QuizRouter)




const Port = process.env.PORT || 8001

app.listen(Port,async(req,res)=>
{
    try{
        await connection
        console.log('listening on port',Port)
        console.log('Db is connected')
    }
    catch(err)
    {
        console.log(err)
        console.log('DB is not connected')
    }

    console.log('Listening on port',process.env.Port)
})