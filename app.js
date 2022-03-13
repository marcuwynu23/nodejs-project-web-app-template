//IMPORTS  
const path = require("path")
const session = require("express-session")
const express = require("express")
const constants = require("./constant/constants")
const routers = require("./router/routers")

//CREATE APP
const app = express()

//VIEW ENGINE CONFIG
const nunjucks = require("nunjucks");
nunjucks.configure(path.resolve(__dirname,constants.VIEW_DIR),{
  express:app,
  autoscape:true,
  noCache:false,
  watch:true
});

//SESSION CONFIG
app.use(session({
  secret:constants.SECRET,
  saveUninitialized: false,
  resave: false
}));

//STATIC CONFIG
app.use(express.static(path.join(__dirname,constants.STATIC_DIR)))

//ROUTER CONFIG
app.use(constants.HOME_URL,routers.HOME);
app.use(constants.CONTACT_URL,routers.CONTACT);
app.use(constants.ABOUT_URL,routers.ABOUT);

//SERVER CONFIG
var PORT = 9000;
app.listen(process.env.PORT | PORT,(err)=>{
  if(!err){
    console.log(`listening on port ${PORT}`);
  }else{
     process.exit(0);
  }
});
