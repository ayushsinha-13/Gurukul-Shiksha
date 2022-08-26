const mongoose = require('mongoose')

const Schema = mongoose.Schema
const questionSchema = new Schema({
    id: Number,
    question: String,
    option1: [{
        answer: String,
        id: Number
    }],
    option2: [{
        answer: String,
        id: Number
    }],
    option3: [{
        answer: String,
        id: Number
    }],
    option4: [{
        answer: String,
        id: Number
    }]
})

const Question = mongoose.model('question', questionSchema)
module.exports = Question