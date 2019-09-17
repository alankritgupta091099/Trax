const express=require('express');
const app=express();
const path = require('path');
const bodyParser=require('body-parser');
const exphbs=require('express-handlebars');

const tech=require('./tech')
const nontech=require('./nontech')

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//template engine
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//Add static files to all HTML pages
app.use(express.static(path.join(__dirname+'/views/public')));
//Root Page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/public/index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
});

//Routes
app.use('/tech',tech);
app.use('/nontech',nontech);