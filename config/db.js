const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery':false)

const connection = mongoose.connect(process.env.mongoURL)
// const connection = mongoose.connect('mongodb://127.0.0.1:27017/masaiquiz')

module.exports={
    connection
}
