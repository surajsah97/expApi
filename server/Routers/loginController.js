// const { modelNames, default: mongoose } = require("mongoose")
const jwt=require('jsonwebtoken');
const User=require("../model/User")
const mail=require("../service/mail")
module.exports={
    loginVerify:async(req,res,next)=>{
        try{
            console.log(req.body);
            const verifyUser=await User.findOne({email:req.body.email,password:req.body.password})
            console.log({verifyUser});
            if(verifyUser){
                console.log({verifyUser});
                let sendMail= await mail.gmail(req.body.email)
                console.log({sendMail});
                const token = await jwt.sign({verifyUser}, 'security_key')
                console.log({token});
                res.cookie("cookie", token).json({
                    status:"SUCCESSFULLY LOGGED IN"
                })
            }
            
                else{
                    res.json({
                        status:"USER NOT FOUND",
                        data:[]
                    })
                
                
            }
        }
        catch(err){
            res.send("err"+ err)
        }
    },
    loginUpdate:async(req,res,next)=>{
        try{
            console.log(req.params.id);
            let user={
                name:req.body.name,
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            }
            const userUpdate=await User.updateOne({id:req.params.id},user)
            if(userUpdate){
                res.json({
                    status:"SUCCESS",
                    data:userUpdate
                })
            }
            else{
                res.json({
                    status:"USER NOT FOUND",
                    data:{}
                })
            }
        }
        catch(err){
            res.json({
                status:"ERROR",
                data:{}
            })
        }

    },
loginDelete:async(req,res,next)=>{
    try{
        const userDelete= await User.remove({id:req.params.id})
        if(userDelete){
            res.json({
                status:"SUCCESS",
                data:userDelete
            })
        }
        else{
            res.json({
                status:"USER NOT FOUND",
                data:{}
            })
        }

    }
    catch(err){

    }
}
}
