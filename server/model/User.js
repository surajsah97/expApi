const mongoose=require("mongoose")
const uuid=require('uuid')
const User=new mongoose.Schema({
    id:{
        type: 'string',
			primaryKey: true,
			default: uuid.v4,
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("user",User)