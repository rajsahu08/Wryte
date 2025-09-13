if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const express = require('express');
const app=express();
const engine = require("ejs-mate");
const Path = require("path");
const mongoose = require("mongoose");
const article = require("./models/article");

const articleRouter = require("./routes/article")

app.engine('ejs',engine);
app.set("view engine","ejs");
app.set("views",Path.join(__dirname,"views"));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

//Connecting to MongoDB Atlas
const MONGO_URL=process.env.ATLAS_DB_URL;

main().then(()=>{
    console.log("Database Connected Successfully!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

//Home Route
app.get("/",async(req,res)=>{
    const articles = await article.find({});
    res.render("./articles/index.ejs",{articles});
})

app.use("/articles",articleRouter);

app.listen(3000,()=>{
    console.log("App is listening at port 3000");
})