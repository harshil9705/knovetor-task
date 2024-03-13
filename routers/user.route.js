const {Router} = require("express")
const { signup, getsignup, login, getlogin } = require("../controllers/user.controllers")

const userroute = Router()

// get
userroute.get("/signup",getsignup)
userroute.get("/login",getlogin)


// post
userroute.post("/signup",signup)
userroute.post("/login",login)

module.exports = {userroute}
