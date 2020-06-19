const express = require('express');
const linksRouter = express.Router();
const chalk = require('chalk');


linksRouter.use('/links', async (req, res, next) =>{
    console.log(chalk.green('A request is being made to the links router.'))
    next();
});


linksRouter.get('/links', async (req, res) => {
    try{
        const links = await getLinks();
        res.send({
            links
        });
    }catch({name, message}){
        throw ({name, message})    
}});


linksRouter.post('/links', async (req, res) => {
    try{
        //(creates tags during link creation)
        const tags = await getAllTags()

        const createdLink = await createLink({tags});
        res.send({
            createdLink
        });
    } catch({name, message}){
        throw({name, message})
    }
});


module.exports = linksRouter 