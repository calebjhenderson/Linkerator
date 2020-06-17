require('dotenv').config();

const { PORT = 3000 } = process.env;
const express = require ('express');
const server = express();
const chalk = require('chalk')

server.listen(PORT, ()=>{
    console.log(chalk.cyan('Server is up on port', PORT))
});