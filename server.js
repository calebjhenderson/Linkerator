require('dotenv').config();

const PORT  = process.env.PORT || 3000;
const express = require ('express');
const server = express();
const chalk = require('chalk')
const path = require('path')
const DIST_PATH = path.join(__dirname, './dist' )

server.use(express.static(DIST_PATH))

server.listen(PORT, ()=>{
    console.log(chalk.cyan('Server is up on port', PORT))
});