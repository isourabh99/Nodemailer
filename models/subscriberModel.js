const mongoose=require("mongoose")

const subscriberSchema=new mongoose.Schema({
    username:String,
    email:String,
    contact:String
})

module.exports=mongoose.model("subscriber",subscriberSchema)