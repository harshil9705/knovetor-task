const { default: mongoose } = require("mongoose");

const connection = ()=>{
    mongoose.connect("mongodb://localhost:27017")
    console.log("DB connected");
}

module.exports ={connection}