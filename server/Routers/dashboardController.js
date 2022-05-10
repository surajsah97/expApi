module.exports={
    dashboard:(req,res,next)=>{
        console.log({req:req.body});
        res.send("this is dashboard page")

    }
}