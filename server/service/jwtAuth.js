const jwt=require('jsonwebtoken');
module.exports=async(req, res, next) => {
    const cookie= await req.headers.cookie;
    console.log(req.headers);
    if (cookie){
        const token = cookie.split("=")[1];
        const tokenVerify=jwt.verify(token,'security_key')
        // console.log((token));
        next()
    }
    else{
        console.log(cookie);
        res.json({
            status:"ERROR",
            data:{}
        })
    }
}