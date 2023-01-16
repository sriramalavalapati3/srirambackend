const express=require("express");
const app=express();
require('dotenv').config()
const {registerRoute}=require("./routes/register.route")
const {auth}=require("./middlewares/jwt.middleware")
const {postRoute}=require("./routes/post.routes")
app.use(express.json());
app.use("/cred",registerRoute)
app.use(auth)
app.use("/post",postRoute)
const {connection}=require("./configa/config")

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db connected")
        console.log("server running at port num 3500")
    } catch (error) {
        console.log("error in connection"+error)
    }
})