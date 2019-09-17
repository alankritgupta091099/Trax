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

//Technical events page
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/public/events/tech.html'));
});

////////////////////////////////////////HACKATHON
router.get('/hackathon',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/public/events/hackathon.html'));
})
////////////////////////////////////////TUG OF BOTS
router.get('/tugofbots',(req,res)=>{
    res.render("desc",{
        title: "Tug Of Bots",
        style:"style.css",
        date:"10 October,2019",
        venue:"ADGITM, Front of Admin Block",
        img:"27.jpg",
        link:"tugofbots",
        type:"Tech",
        typelink:"tech"
    });
    //res.sendFile(path.join(__dirname+'/views/public/events/tugofbots.html'));
})
router.get('/tugofbots/reg',(req,res)=>{
    res.render("event",{
        title: "Tug Of Bots",
        style:"style.css"
    });
})
router.post('/tugofbots/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Tug Of Bots";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/tech/tugofbots/reg/suc");
})
router.get('/tugofbots/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Tug Of Bots",
        style:"style.css"
    });
})
////////////////////////////////////////ROBOWAR
router.get('/robowar',(req,res)=>{
    res.render("desc",{
        title: "Robowar",
        style:"style.css",
        date:"11 October,2019",
        venue:"ADGITM, Front of Admin Block",
        img:"27.jpg",
        link:"robowar",
        type:"Tech",
        typelink:"tech"
    });
    //res.sendFile(path.join(__dirname+'/views/public/events/robowar.html'));
})
router.get('/robowar/reg',(req,res)=>{
    res.render("event",{
        title: "Robowar",
        style:"style.css"
    });
})
router.post('/robowar/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Robowar";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/tech/robowar/reg/suc");
})
router.get('/robowar/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Robowar",
        style:"style.css"
    });
})
////////////////////////////////////////exhibition
router.get('/exhibition',(req,res)=>{
    res.render("desc",{
        title: "Exhibition",
        style:"style.css",
        date:"12 October,2019",
        venue:"ADGITM, Front of Canteen",
        img:"27.jpg",
        link:"exhibition",
        type:"Tech",
        typelink:"tech"
    });
})
router.get('/exhibition/reg',(req,res)=>{
    res.render("event",{
        title: "Exhibition",
        style:"style.css"
    });
})
router.post('/exhibition/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="Exhibition";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/tech/exhibition/reg/suc");
})
router.get('/exhibition/reg/suc',(req,res)=>{
    res.render("success",{
        title: "Exhibition",
        style:"style.css"
    });
})
////////////////////////////////////////lfr
router.get('/lfr',(req,res)=>{
    res.render("desc",{
        title: "LFR",
        style:"style.css",
        date:"12 October,2019",
        venue:"ADGITM, Front of Canteen",
        img:"27.jpg",
        link:"lfr",
        type:"Tech",
        typelink:"tech"
    });
})
router.get('/lfr/reg',(req,res)=>{
    res.render("event",{
        title: "LFR",
        style:"style.css"
    });
})
router.post('/lfr/reg',(req,res)=>{
    
    console.log(req.body);
    let eventName="LFR";
    const{teamName,teamCount,firstName,secondName,email,number,college,branch,year}=req.body;
    mailbhejo(eventName,teamName,teamCount,firstName,secondName,email,number,college,branch,year);
    res.redirect("/tech/lfr/reg/suc");
})
router.get('/lfr/reg/suc',(req,res)=>{
    res.render("success",{
        title: "LFR",
        style:"style.css"
    });
})
module.exports=router;