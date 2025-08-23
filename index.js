const express = require('express');
const app=express();
const engine = require("ejs-mate");
const mongoose = require("mongoose");

app.engine('ejs',engine);
app.use(express.static('public'));

main().then(()=>{
    console.log("Database Connected Successfully!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/medium-web');
}

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/signin",(req,res)=>{
    res.render("user/signin.ejs");
})

app.get("/signup", (req,res)=>{
    res.render("user/signup.ejs");
})

app.listen(3000,()=>{
    console.log("App is listening at port 3000");
})