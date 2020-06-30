const express = require('express');
const linksRouter = express.Router();
const { getAllLinks, createLink, addTagToLink, incrementClicks, getLinkById, updateLink, destroyLink } = require('../db');

linksRouter.use((req, res, next) => {
    console.log('> A request has been made to the /links endpoint');
    next();
})

linksRouter.get('/', async(req, res, next) => {
    try {
        const links = await getAllLinks();
        res.send({links});
    } catch (error) {
        console.error(error);
        next(error);
    }
})

linksRouter.post('/', async (req, res, next) => {
  
    const { link, comment  } = req.body;

    try {
        const newLink = await createLink({creatorId, link, comment})

        res.send({message: "Link created successfully", link: newLink});
    } catch (error) {
        console.error('>>>error:', error.code)
        next(error)
    }
})

linksRouter.post('/:id', async (req, res, next) => {
    const { id: linkId } = req.params;
    const { tagId } = req.body;

    try {
        const response = await addTagToLink({linkId, tagId})

        res.send({response})
    } catch (error) {
        next(error);
    }
})

linksRouter.patch('/:linkId', async (req, res, next) => {
    const { linkId: id } = req.params;
    const { link, comment } = req.body;

    try {
        if (!link && !comment) {
            const clickedLink = await incrementClicks(id);
            return res.send({
                name: 'link clicked',
                link: clickedLink
            });
        }
      
        const updatedLink = await updateLink({id, link, comment});
        console.log(updatedLink)
        return res.send({message: "Link Updated", updatedLink});
        
    } catch (error) {
        next(error);
    }
})

linksRouter.delete('/:linkId', async (req, res, next) => {
    const { linkId: id } = req.params;

    try {
        await destroyLink(id);
        res.send({message: "Routine Successfully Deleted"});
    } catch (error) {
        console.error(error)
        next(error);
    }
})

module.exports = linksRouter;