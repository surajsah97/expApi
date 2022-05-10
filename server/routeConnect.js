const express=require("express");
const route=express.Router();
const policy=require("./policy")
const router=require("./routes")
const jwt=require("./service/jwtAuth")
for (let routes in router){
    let method=routes.split(" ")[0]
    let routeLoc=routes.split(" ")[1]
    if (method==="GET"){
        if(policy[router[routes].split(".")[1]]){
        route.get(routeLoc,jwt,(req,res,next)=>{
            require(`./Routers/${router[routes].split(".")[0]}`)[router[routes].split(".")[1]](req,res,next)
        })
        }
    }
    else if (method==="PUT"){
        route.put(routeLoc,(req,res,next)=>{
            require(`./Routers/${router[routes].split(".")[0]}`)[router[routes].split(".")[1]](req,res,next)
        })
    }
    else if (method==="POST"){
            route.post(routeLoc,(req,res,next)=>{
                require(`./Routers/${router[routes].split(".")[0]}`)[router[routes].split(".")[1]](req,res,next)
            })
        }
    if (method==="DELETE"){
        route.delete(routeLoc,(req,res,next)=>{
            require(`./Routers/${router[routes].split(".")[0]}`)[router[routes].split(".")[1]](req,res,next)
        })
    }
    }

module.exports=route