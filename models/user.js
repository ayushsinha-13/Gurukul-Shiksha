const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {type: String},
    ID: {type: Number},
    password: {type: String},
    score: {type: Number},
    currScore: {type: Number}
})

const User = mongoose.model('user', userSchema)
module.exports = User