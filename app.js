 
const path = require("path")
const session = require("express-session")
const express = require("express")
const app = express()



//view Engine/templating configuration
const nunjucks = require("nunjucks");
nunjucks.configure(path.resolve(__dirname,'view'),{
  express:app,
  autoscape:true,
  noCache:false,
  watch:true
});

//SESSION CONFIG
app.use(session({
  secret:"this is a secret",
  saveUninitialized: false,
  resave: false
}));

//STATIC CONFIG
app.use(express.static(path.join(__dirname,"/public")));




app.use("/",(req,res)=>{
  res.render("index.html",{});
});


var PORT = 9000;
app.listen(process.env.PORT | PORT,(err)=>{
  if(!err){
    console.log(`listening on port ${PORT}`);
  }else{
     process.exit(0);
  }
});
