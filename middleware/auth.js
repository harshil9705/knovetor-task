const jwt = require("jsonwebtoken")
const { user } = require("../models/post.models")
const userauth = (req,res,next)=>{
    const {token} = req.cookies
    if(!token)
    {
        res.json({error:"login & signup first"})
    }
    else{
        next()
        const data = jwt.verify(token,"key")
        req.user = data.token.userId;
    }
}

module.exports = {userauth}