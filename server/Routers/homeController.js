const verifyHomedb=require("../model/verifyHomedb")
module.exports={
    home:async(req,res,next)=>{
        // res.send("this is home page")
    //     let a=await verifyHomedb.save(req.body)
    //     if(a){
    //     res.json({
    //         status:"SUCCESS",
    //         data:a
    //     })
    // }
    // else{
    //     res.json({
    //         status:"err",
    //         data:a
    //     })
    // }
    },
    verifyHome:async(req,res,next)=>{
        let a=await verifyHomedb.createOne(req.body)
        res.json({
            status:"SUCCESS",
            data:a
        })
    }
}