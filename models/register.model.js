const mongoose=require("mongoose")

const dataSchema=mongoose.Schema({
    "name":String,
    "email":String,
    "gender":String,
    "password":String
})

const Datamodel=mongoose.model("register",dataSchema)
module.exports={Datamodel}