const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path: '../.env'})

console.log(process.env.MONGO_PORT)

const conn = mongoose.connect(process.env.MONGO_PORT)
//     .then(db =>{
//         console.log("Database Connected")
//         return db
//     }).catch(err => {
//         console.log("Connection Error: " + err)
// })

module.exports = conn;