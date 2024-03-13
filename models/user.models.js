const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
    username : 
    {
        type : String,
        require:true
    },
    email:
    {
        type : String,
        require:true,
    },
    password:
    {
        type : String,
        require:true,
    }
})


const user = mongoose.model("users",userschema)

module.exports = {user}