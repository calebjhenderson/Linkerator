require('dotenv').config();

const PORT  = process.env.PORT || 3000;
const express = require ('express');
const server = express();
const chalk = require('chalk')
const path = require('path')

const DIST_PATH = path.join(__dirname, './public' )
server.use(express.static(DIST_PATH))

const ROUTES = path.join(__dirname,'./routes/routers.js')
server.use(express.static(ROUTES))
//can we .use on multiple variables like this?

server.listen(PORT, ()=>{
    console.log(chalk.cyan('Server is up on port', PORT))
});