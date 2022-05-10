const User=require("../model/User")
module.exports={
    register:async(req,res,next)=>{
    
            
            let user=new User({
                name:req.body.name,
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            })
            const createUser=await User.create(user)
            if(createUser){
                res.json({
                    status:"SUCCESS",
                    data:createUser
                })
            
    }
    else{
        res.json({
            status:"ERROR",
            data:{}
        })
    }
}
}