const express = require('express');
const linksRouter = express.Router();
const chalk = require('chalk');


linksRouter.use((req,res) =>{
    console.log('A request is being made to the links router.')
});


linksRouter.get('/', async (req, res) => {
    try{
        const links = await getLinks();
        res.send({
            links
        });
    }catch({name, message}){
        throw ({name, message})    
}});


linksRouter.post('/create', async (req,res) => {
    try{
        const newLink = await createLink();
        res.send({
            newLink
        });
    } catch({name, message}){
        throw ({name, message})
    }
});

module.exports = linksRouter 