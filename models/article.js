const mongoose = require("mongoose");
const {Schema} = mongoose;

const articleSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },
    image: {
        url: String,
        filename: String,
    },
    description:{
        type:String,
        required: true,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("article",articleSchema);