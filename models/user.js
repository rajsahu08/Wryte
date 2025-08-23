const mongoose=require('mongoose');
const {schema} = mongoose;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required:true,
    }
});

module.exports = mongoose.model("user",userSchema);