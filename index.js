const express = require("express");
const { connection } = require("./config/db");
const { userroute } = require("./routers/user.route");
const cookieParser = require("cookie-parser");
const { urlencoded } = require("body-parser");
const { postroute } = require("./routers/post.route");
const app = express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())

app.use("/user",userroute)
app.use("/post",postroute)

app.set("view engine","ejs")
app.set("views",__dirname + "/views")



app.listen(8080,()=>{
    console.log("app running on port 8080");
    connection();
})