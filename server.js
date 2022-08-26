require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const port = process.env.PORT || 5000

// Database connection
const conn = require('./database_connection');

const routes = require('./routes/route')
app.use(routes)

app.listen(port,()=>{
    console.log(`Server running at PORT 3000`)
})