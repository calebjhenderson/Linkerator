const express = require('express');
const linksRouter = express.Router();
const chalk = require('chalk');


linksRouter.use((req, res, next) =>{
    console.log(chalk.green('A request is being made to the links router.'))
    next();
});


linksRouter.get('/links', async (req, res, next) => {
    try{
        const links = await getLinks();
        res.send({
            links
        });
    }catch({name, message}){
        throw ({name, message})    
}});


linksRouter.post('/createlink', async (req, res, next) => {
    try{
        const createdLink = await createLink();
        res.send({
            createdLink
        });
    } catch({name, message}){
        throw({name, message})
    }
});


module.exports = linksRouter 