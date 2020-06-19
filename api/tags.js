const express = require('express');
const tagsRouter = express.Router();
const chalk = require('chalk');


tagsRouter.use((req, res) => {
    console.log(chalk.green("A request is being made to the tags router!"))
    next();
});


tagsRouter.get('/tags', async(req, res, next) => {
try{
    tags = await getAllTags();
    res.send({
        tags
    });
    }catch({name, message}){
        throw({name, message})
    }
});


tagsRouter.post('/newtag', async(req, res, next) => {
    try{
        newTag = await createTag();
        res.send({
            newTag
        });
    }catch({name, message}){
        throw({name, message})
    }
});


module.exports = tagsRouter;