const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Database connection
const conn = require('./database_connection');

const routes = require('./routes/route')
app.use(routes)

app.listen(3000,()=>{
    console.log(`Server running at PORT 3000`)
})