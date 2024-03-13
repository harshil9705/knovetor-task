const {Router} = require("express")
const { userauth } = require("../middleware/auth")
const { create, show, dlt, update } = require("../controllers/post.controllers")
const jwt = require("jsonwebtoken")
const { post } = require("../models/post.models")
const postroute = Router()


postroute.get("/create",userauth,(req,res)=>{
    res.render("create")
})


postroute.post("/create",userauth,async(req,res)=>{
    try {
        const {title,body,Geolocation,activation} = req.body
        const {token} = req.cookies
        const data = jwt.verify(token,"key")
        data.token.userId;
        await post.create({
            activation,
            title,
            body,
            Geolocation,
            activation,
            createdBy:data.token.userId
        })
    
        res.json({msg:"post created sucessfully..."})
    } catch (error) {
        res.json({error:error.message})
    }
})

postroute.get("/userpost/:userId",show)
postroute.delete("/delete/:postId",dlt)
postroute.patch("/update/:postId",update)


module.exports = {postroute}