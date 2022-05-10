const nodemailer=require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport')
module.exports={
gmail:(user)=>{
    console.log({user});
    
const transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:"thesunlightsah@gmail.com",
        pass:"Surajsah@97"
    },
});


const option={
    from:"thesunlightsah@gmail.com",
    to:user,
    subject:"Authenticate",
    text:"you have signed in successfully"
};
transporter.sendMail(option,(err,info)=>{
    if(err){
        console.log(err);
        return err;
    }
    else{
        return info;
    }
})
}

}
