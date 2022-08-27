//IMPORTS  
const express = require("express")
const constants = require('./constants/constants')

//EXPRESS APP 
const app = express()

//CONFIGURATION
require('./config/dependencies')(app, express, constants, __dirname)
require('./config/routes')(app, constants)
require('./config/server')(app)