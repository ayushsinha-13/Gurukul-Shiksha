const Question = require('../models/question')
const User = require('../models/user')
const Count = require('../models/count')
const random = require('random')
const Activity = require('../models/activity')

// const newCount = new Count({
//     count: 0
// })

// newCount.save((err)=>{
//     if(err){
//         console.error(err)
//     }
// })

const get_question = async(req,res)=>{
        const lowerLimit = random.int((min = 11), (max = 16))
        const upperLimit = lowerLimit + 5
        await Question.find({id: {$gte: lowerLimit, $lte: upperLimit}},(err,foundQuestions)=>{
            if(!err){
                res.send(JSON.stringify(foundQuestions))
            }else{
                res.send(err)
            }
        }).clone()
}

const setQuestions = async(req,res)=>{

    // set all the datils from the post to local varible
    const id = req.body.QID
    const question = req.body.question
    const opt1 = req.body.opt1
    const opt2 = req.body.opt2
    const opt3 = req.body.opt3
    const opt4 = req.body.opt4
    const corrOpt = req.body.correct

    let optID1
    let optID2
    let optID3 
    let optID4 

    if(corrOpt === 'a'){
        optID1 = (id*100) + 11
        optID2 = (id*100) + 02
        optID3 = (id*100) + 03 
        optID4 = (id*100) + 04 
    }else if(corrOpt === 'b'){
        optID1 = (id*100) + 01
        optID2 = (id*100) + 12 
        optID3 = (id*100) + 03 
        optID4 = (id*100) + 04 
    }else if(corrOpt === 'c'){
        optID1 = (id*100) + 01
        optID2 = (id*100) + 02 
        optID3 = (id*100) + 13 
        optID4 = (id*100) + 04 
    }else if(corrOpt === 'd'){
        optID1 = (id*100) + 01
        optID2 = (id*100) + 02 
        optID3 = (id*100) + 03 
        optID4 = (id*100) + 14 
    }

    

    // create model
    const newQuestion = new Question({
        id: id,
        question: question,
        option1: [{
            answer: opt1,
            id: optID1
        }],
        option2: [{
            answer: opt2,
            id: optID2
        }],
        option3: [{
            answer: opt3,
            id: optID3
        }],
        option4: [{
            ans: opt4,
            id: optID4
        }],
    })

    // save the model
    newQuestion.save((err)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Question Saved")
        }
})
}

const get_activity = async(req,res)=>{
    const student_ID = req.body.ID
    await Activity.find({id: student_ID}, (err,foundStudent)=>{
        if(!err){
            res.send(JSON.stringify(foundStudent[0]))
        }else{
            req.send(err)
        }
    }).clone()
}

const setActivity = async(req,res)=>{
    const id = req.body.id
    const learn_hour = req.body.learn_hour
    const total_attempt = req.body.total_attempt
    const credit = req.body.credit
    const total_hour = req.body.total_hour

    const newActivity = new Activity({
        user_ID: id,
        learn_hours: learn_hour,
        total_attempt: total_attempt,
        credit: credit,
        total_hours: total_hour
    })

    newActivity.save((err)=>{
        if(!err){
            res.send("Activity saved")
        }else{
            res.send(err)
        }
    })


}

const login_user = async(req,res)=>{
    const username = req.body.user_id
    const password = req.body.password

    await User.find({id: username},(foundUser,err)=>{
        if(foundUser){
            if(foundUser[0].password === password){
                res.send(JSON.stringify(foundUser[0]))
            }
        }else{
            req.send(err)
        }
    })
}


// USER - LOGIN

const createUser = async(req,res)=>{
    const password = req.body.password
    const confirm_password = req.body.con_password
    const user_name = req.body.name
    const score = 0
    const curr_score = 0

    const temp1 = random.int((min = 1), (max = 10)) 
    const temp2 = random.int((min = 10), (max = 20))
    const ID = (temp1*10)+temp2

    let curr_count

    // FIND the current count from the count schema 
    await Count.find({}, (err,found)=>{
        curr_count = found[0].count
    }).clone()

    if(password != confirm_password){
        res.send("Password doesn't match")
    }else{
        const newUser = new User({
            name: user_name,
            password: password,
            score: score,
            currScore: curr_score, 
            ID: ID
        })

        newUser.save(async(err)=>{
            if(err){
                console.err(err)
                res.send(err)
            }else{
                await Count.find({}, (err,found)=>{
                    if(!err){
                        found[0].count = curr_count + 1;
                    found.save((err)=>{
                        if(!err){
                            res.send("Data added successfully")
                        }else{
                            res.send("Error")
                        }
                    })
                    }
                }).clone()
            }
        })
    }
}

module.exports = {
    get_question,
    setQuestions,
    login_user,
    createUser,
    get_activity,
    setActivity
}