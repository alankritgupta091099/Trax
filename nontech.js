require('dotenv').config();

const express=require('express');
const router=express.Router();
const path = require('path');
const nodemailer=require('nodemailer');;

// Mail
function mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year)
{
    email="alankritgupta091099@gmail.com"
    // step1
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });
    // step2
    let text=`Your Registration for the ${eventName} has been done. See you at the event.
    Registration Details:
    ${teamName}
    ${firstName[0]} ${secondName[0]} 
    ${firstName[1]} ${secondName[1]}
    ${firstName[2]} ${secondName[2]}
    ${firstName[3]} ${secondName[3]}
    `
    let mailOptions={
        from:"technorax.v5@gmail.com",
        to:email,
        subject:`Registration For ${eventName}: Successfull`, 
        text:text
    };
    //step3
    transporter.sendMail(mailOptions,(err,data)=>{
        if(err)
            console.log("Error")
        else
            {
                console.log("sent");
            }
    });
}

//Non technical events page
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/public/events/nontech.html'));
});
////////////////////////////////////////Treasure Hunt
router.get('/thunt',(req,res)=>{
    res.render("desc",{
        title: "Treasure Hunt",
        style:"style.css",
        date:"11 October,2019",
        venue:"ADGITM, Front of Admin Block",
        img:"27.jpg",
        link:"thunt",
        type:"Non Tech",
        typelink:"nontech"
    });
})
router.get('/thunt/reg',(req,res)=>{
    res.render("event",{
        title: "Treasure Hunt",
        style:"style.css"
    });
})
router.post('/thunt/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Treasure Hunt";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/nontech/thunt/reg/suc");
})
router.get('/thunt/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Treasure Hunt",
        style:"style.css"
    });
})
////////////////////////////////////////Treasure Hunt
router.get('/br',(req,res)=>{
    res.render("desc",{
        title: "Bottle Rocket",
        style:"style.css",
        date:"10 October,2019",
        venue:"ADGITM, BasketBall Court",
        img:"27.jpg",
        link:"br",
        type:"Non Tech",
        typelink:"nontech"
    });
})
router.get('/br/reg',(req,res)=>{
    res.render("event",{
        title: "Bottle Rocket",
        style:"style.css"
    });
})
router.post('/br/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Bottle Rocket";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/nontech/br/reg/suc");
})
router.get('/br/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Bottle Rocket",
        style:"style.css"
    });
})
////////////////////////////////////////Treasure Hunt
router.get('/br',(req,res)=>{
    res.render("desc",{
        title: "Bottle Rocket",
        style:"style.css",
        date:"10 October,2019",
        venue:"ADGITM, BasketBall Court",
        img:"27.jpg",
        link:"br",
        type:"Non Tech",
        typelink:"nontech"
    });
})
router.get('/br/reg',(req,res)=>{
    res.render("event",{
        title: "Bottle Rocket",
        style:"style.css"
    });
})
router.post('/br/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Bottle Rocket";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/nontech/br/reg/suc");
})
router.get('/br/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Bottle Rocket",
        style:"style.css"
    });
})
////////////////////////////////////////Debate
router.get('/debate',(req,res)=>{
    res.render("desc",{
        title: "Technical Debate",
        style:"style.css",
        date:"10 October,2019",
        venue:"ADGITM, Auditorium",
        img:"27.jpg",
        link:"debate",
        type:"Non Tech",
        typelink:"nontech"
    });
})
router.get('/debate/reg',(req,res)=>{
    res.render("event",{
        title: "Technical Debate",
        style:"style.css"
    });
})
router.post('/debate/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Technical Debate";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/nontech/debate/reg/suc");
})
router.get('/debate/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Technical Debate",
        style:"style.css"
    });
})
////////////////////////////////////////Quiz
router.get('/quiz',(req,res)=>{
    res.render("desc",{
        title: "Technical Quiz",
        style:"style.css",
        date:"11 October,2019",
        venue:"ADGITM, Auditorium",
        img:"27.jpg",
        link:"quiz",
        type:"Non Tech",
        typelink:"nontech"
    });
})
router.get('/quiz/reg',(req,res)=>{
    res.render("event",{
        title: "Technical Quiz",
        style:"style.css"
    });
})
router.post('/quiz/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Technical Quiz";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/nontech/quiz/reg/suc");
})
router.get('/quiz/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Technical Quiz",
        style:"style.css"
    });
})
////////////////////////////////////////Debate
router.get('/meme',(req,res)=>{
    res.render("desc",{
        title: "Meme Making",
        style:"style.css",
        date:"10 October,2019",
        venue:"ADGITM, Auditorium",
        img:"27.jpg",
        link:"meme",
        type:"Non Tech",
        typelink:"nontech"
    });
})
router.get('/meme/reg',(req,res)=>{
    res.render("event",{
        title: "Meme Making",
        style:"style.css"
    });
})
router.post('/meme/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Meme Making";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/nontech/meme/reg/suc");
})
router.get('/meme/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Meme Makinng",
        style:"style.css"
    });
})
module.exports=router;