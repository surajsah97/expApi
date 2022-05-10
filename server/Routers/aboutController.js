module.exports={
about:(req,res,next)=>{
    console.log(req.body)
    res.send("about page")
}
}