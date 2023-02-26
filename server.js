const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const str = process.env.MONGO_CONNECTION_STRING;

const mongoose = require('mongoose');
const courseLib = require('./backend/lib/courseLib');


const app = express();

app.use(express.static("frontend"))

app.get("/",function(req,res){
    res.sendFile(__dirname +"/frontend/index.html");
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, async function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("DB Connected Successful");
        await courseLib.createFirstCourse();
        const courses  = await courseLib.getAllcourses();
        console.log(courses);
        app.listen(3000,function(){
            console.log("server running on http://localhost:3000");
        })
        //TODO: start express app server here
    }
})

// app.listen(3000,function(){
//     console.log("server running on http://localhost:3000")
// })