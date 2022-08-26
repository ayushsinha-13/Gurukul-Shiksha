const express = require('express')
const controller = require('../controllers/controller')

const app = express()

app.route('/')
    .get((req,res)=>{
        res.send("Server Started")
    })

app.route('/login')
    .post(controller.login_user)

app.route('/question')
    .get(controller.get_question)
    .post(controller.setQuestions)
 
app.route('/register')
    .post(controller.createUser)

app.route('/activity-set')
    .post(controller.setActivity)    

app.route('/activity-get')
    .post(controller.get_activity)     



module.exports = app