const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    firstname:String,
    lastname:String,
    phone:Number,
    email:String,
    password:String,
    datebirth: {
        "type": "date",
    }   ,
   // governorate:String
})
module.exports=mongoose.model("user-auth",UserSchema)
