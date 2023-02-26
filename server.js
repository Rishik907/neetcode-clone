const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("Hello World");
})

app.get("/name",function(req,res){
    res.send("rishik sai");
})



app.listen(3000,function(){
    console.log("server running on http://localhost:3000")
})