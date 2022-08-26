require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors');

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors());

const port = process.env.PORT

// Database connection
const conn = require('./database_connection');

const routes = require('./routes/route')
app.use(routes)

con.then(db => {
    if(!db) return process.exit(1);

    // listen to the http server 
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })

    app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
    // error in mondb connection
}).catch(error => {
    console.log(`Connection Failed...! ${error}`);
});