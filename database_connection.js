require('dotenv').config()
const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.MONGO_PORT)
    .then(db =>{
        console.log("Database Connected")
        return db
    }).catch(err => {
        console.log("Connection Error: " + err)
})

module.exports = conn;