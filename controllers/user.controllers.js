const { user } = require("../models/user.models");
const jwt = require("jsonwebtoken")

const signup = async(req,res)=>{
    const {username,email,password} = req.body;

    const data = await user.findOne({email})
    if (!data) {
        const create = await user.create({username,email,password})  
        const obj = {
            email,
            username,
            userId:id
        }
        const token = jwt.sign({token : obj},"key")
        return res.cookie("token",token).json({msg:"account ragistration succesfully..."})
    }
    else{
        return res.json({error:"account already exist..."})
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    const data = await user.findOne({email})
    if(data)
    {
        if(password == data.password)
        {
            const obj = {
                email:data.email,
                username:data.username,
                userId:data.id
            }
            const token = jwt.sign({token : obj},"key")
            return res.cookie("token",token).json({msg:"loged in"})
        }
        else{
            res.json({error:"password incorrect"})
        }
    }
    else{
        res.json({error:"email id incorrect pls signup first"})
    }
}

const getsignup = (req,res)=>{
    res.render("signup");
}

const getlogin = (req,res)=>{
    res.render("login");
}

module.exports = {signup,getsignup,getlogin,login}