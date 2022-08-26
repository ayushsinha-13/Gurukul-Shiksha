const mongoose = require('mongoose')

const Schema = mongoose.Schema
const countSchema = new Schema({
    count: {type: Number}    
})

const Count = mongoose.model('count', countSchema)
module.exports = Count