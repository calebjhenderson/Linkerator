const express = require('express');

const { getAllLinks, createLink, getLinkById, updateLink, destroyLinkTags, destroyLink, updateTag, createTags, addTagsToLink } = require('../db')
const linkRouter = express.Router();

linkRouter.use((req, res, next) => {
    console.log('A request in being made to /links')
    next()
});

// GET /api/links
// Router for GET LINKS
// *** returns all links ***
linkRouter.get("/", async (req, res, next) => {

    const links = await getAllLinks();
  
    console.log('successfully retrieved all links: ', links);
  
    res.send({
      links,
      status: true,
      message: 'successfully retrieved all links'
    });
  
});
  
// POST /api/links
// Router for POST lINKS
// *** create a new link with tags (if added) ***
linkRouter.post("/", async (req, res, next) => {

      try {

          const { name, url, comment, tags = "" } = req.body;
          const tagArray = tags.trim().split(/\s+/); // takes space separated string into array
          const linkInfo = { link, comment };
          const newLink = await createLink({ linkInfo });
          const linkFields = {};

          // if tags added, attach to empty link bject
          if (tagArr.length) {
             linkFields.tags = tagArray;
          }

          // setup rest of link object
          linkFields = name;
          linkFields.url  = url;
          linkFields.comment = comment;

          const newLink = await createLink(linkData)

          if (newLink) {
              res.send({
                  message: 'new link created',
                  data: newLink,
                  status: true
              });

          } else {
            next({
                name: 'LinkError',
                message: `You need to enter a link to post!`
            });
          }    
          
        } catch ({ name, message }) {
            next({ name, message });
        }
  });
  
  // PATCH /api/links:id
  // ***  update comment/tags and increment link count ***
  apiRouter.patch('/:id', async (req, res, next) => {
      
      const {id} = req.params;
      const {name, url, count, comment, tags} = req.body;
      const tagsArray = tags.trim().split(/\s+/)
      const updateFields = {};
  
      console.log('Entered /links/:id PATCH. id: ', id, 'req.body: ', req.body);
  
      if (name) {
         updateFields.name = name;
      }

      if (url) {
         updateFields.url = url;
      }

      if (count) {
         updateFields.count = count;
      }

      if (comment) {
         updateFields.comment = comment;
      }
      
      try {

          await updateLink(id, updateFields);
          console.log('Edited link: ', updatedLink);

          const updatedTags = await createTags(tagsArray)

          await addTagsToLink(id, updatedTags);

          const updatedLink = await getLinkById(id)

          res.send({
              message: 'link updated',
              data: updatedLink,
              status: true,
          });

        } catch ({ name, message }) {
            next({ name, message });
       }
  })

  // DELETE /api/link:id
  // ***  delete link and link_tags ***
linksRouter.delete('/:linkId', async (req, res, next) => {

    const { id } = req.params;

    try {

        const link = await getLinkById(id);
  
        // verify link is valid
        if (link.id === id) {
        
            const deletedLinkTags = await destroyLinkTags(linkId);
            const deletedLink = await destroyLink(linkId);
    
            res.send({ 
                message: "Link Deleted",
                deleletedLink: deletedLink,
                deletedLinkTags: deletedLinkTags
            });
 
        } else {
            next({
                name: "LinknotFoundError",
                message: "Link does not exist"
            })
        }    

    } catch ({name, message }){
      next({ name, message })
    }
  });

  module.exports = linkRouter;