const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const postchema = new Schema({
    title : 
    {
        type : String,
        require:true
    },
    body:
    {
        type : String,
        require:true,
    },
    createdBy:
    {
        type : mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    activation:
    {
        type : Boolean,
        require:true,
    },
    Geolocation:
    {
        type : String,
        defoult:"latitude",
        require:true,
    },
})


const post = mongoose.model("post",postchema)

module.exports = {post}