const express = require('express')
const link_tagsRouter = express.Router();
const chalk = require('chalk');


link_tagsRouter.use('/', async (req, res, next) =>{
    console.log(chalk.green('A request is being made to the links router.'))
    next();
});

link_tagsRouter.get('/link_tags', async (req,res)=>{

});

link_tagsRouter.post('/link_tags', async (req,res)=>{
    
});

link_tagsRouter.patch('/link_tags', async (req,res)=>{
    
});