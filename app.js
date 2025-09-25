if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const app = express();
const engine = require("ejs-mate");
const Path = require("path");
const mongoose = require("mongoose");
const article = require("./models/article");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const articleRouter = require("./routes/article");

app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "views"));


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.ATLAS_DB_URL,
    }),
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
}))

//Connecting to MongoDB Atlas
const MONGO_URL = process.env.ATLAS_DB_URL;

main().then(() => {
    console.log("Database Connected Successfully!");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

//Home Route
app.get("/", async (req, res) => {
    const articles = await article.find({});
    res.render("./articles/index.ejs", { articles, query: "" });
})
// Add this below your existing routes in app.js
app.get("/search", async (req, res) => {
    const { query } = req.query; // Get the search query from the URL
    if (!query) {
        // If no query is provided, render the index with all articles or an empty result
        const articles = await article.find({});
        return res.render("./articles/index.ejs", { articles, query: "" });
    }

    // Search for articles where title or description contains the query (case-insensitive)
    const articles = await article.find({
        $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } }
        ]
    });

    res.render("./articles/index.ejs", { articles, query });
});
app.use("/articles", articleRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log("App is listening at port 3000");
})