
const express = require("express");


const app = express(); // order matters-this must be above the configs below


const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');


appConfig.init(app, express);
routeConfig.init(app);



//console.log(process.env.megasecret)




module.exports = app;

