const { post } = require("../models/post.models");

const create = async(req,res)=>{
    try {
        const {title,body,Geolocation,activation} = req.body
        const {token} = req.cookies

        console.log(req.body);
        console.log();
    
        const data = jwt.verify(token,"key")
        data.token.userId;
    
        const obj = {
            activation,
            title,
            body,
            Geolocation,
            activation,
            createdBy:data.token.userId
        }
        console.log(obj);
        await post.create(obj)
    
        res.json({msg:"post created sucessfully..."})
    } catch (error) {
        res.json({error:error.message})
    }
}

const show = async(req,res)=>{
    const {userId} = req.params

    const data = await post.find({userId})

    res.json({posts:data})
}

const dlt = async(req,res)=>{
    const {postId} = req.params

     await post.findOneAndDelete({id:postId})

    res.json({msg:"post delete sucessfully"})
}

const update = async(req,res)=>{
    const {postId} = req.params

     await post.findOneAndUpdate({id:postId},req.body)

    res.json({msg:"post update sucessfully"})
}

module.exports ={create,show,dlt,update}