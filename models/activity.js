const mongoose = require('mongoose')

const Schema = mongoose.Schema
const activitySchema = new Schema({
    user_ID: {type: Number},
    learn_hours: {type: Number},
    total_attempt: {type: Number},
    credit: {type: Number},
    total_hours: {type: Number}
})

const Activity = mongoose.model('activity', activitySchema)
module.exports = Activity