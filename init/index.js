const mongoose = require('mongoose');
const initData = require('./data.js');
const article = require("../models/article.js");

main().then(()=>{
    console.log("Database Connected Successfully!");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb+srv://rajsahu0702:Ch8F20wKWhipYxF8@cluster0.ooihjrj.mongodb.net/Medium?retryWrites=true&w=majority&appName=Cluster0');
}
console.log(initData);
const initDB = async()=>{
    await article.deleteMany({});
    await article.insertMany(initData);
    console.log("Database Initialized with Sample Data");
}
initDB();