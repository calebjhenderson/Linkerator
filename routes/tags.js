const express = require('express');
const tagsRouter = express.Router();
const chalk = require('chalk');


tagsRouter.use('/',(req, res, next) => {
    console.log(chalk.green("A request is being made to the tags router!"))
    next();
});


tagsRouter.get('/tags/:tagName/links', async(req, res) => {
    const tag = req.params
try{
    tags = await getTagByName(tag);
    res.send({
        tags
    });
    }catch({name, message}){
        throw({name, message})
    }
});



module.exports = tagsRouter;