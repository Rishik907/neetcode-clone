const express = require("express");

const app = express();

app.use(express.static("frontend"))

app.get("/",function(req,res){
    res.sendFile(__dirname +"/frontend/SimpleHtml.html");
})



app.listen(3000,function(){
    console.log("server running on http://localhost:3000")
})