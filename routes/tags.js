const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getLinkByTagName } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log('A request in being made to /tags')
    next()
});

tagsRouter.get('/', async (req,res) => {
    const tags = await getAllTags();

    res.send({
        tags
    });
});

// GET /api/tags:tagName/links
// *** returns all links by tag name ***
tagsRouter.get('/:tagName/links', async (req, res, next) => {

    const { tagName } = req.params;
  
    const links = await getLinkByTagName(tagName);
    
    try {
        if(links) {
            res.send({
                links
            });
        } else {
            next({
                name: 'NoLinksForTagsrror',
                message: "Did not find any links for this tag"
            });
        }
    } catch({ name, message }) {
        next({ name, message });
    }
  });

module.exports = tagsRouter;