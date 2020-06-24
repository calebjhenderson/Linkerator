const { db } = require ('./database');

// public
async function getAllLinks() {

    const { rows: linksIds } = await db.query(`
        SELECT * FROM links;
    `);

    const links = await Promise.all(linksIds.map(
      link => getLinkById( link.id )
    ));

   console.log('>>>>>getAllLinks', links);
   
   return links;

}

// public
async function getLinkByTagName(tagName) {
    
      const { rows: linkIds } = await db.query(`
        SELECT links.id
        FROM links
        JOIN link_tags ON links.id=link_tags."linkId"
        JOIN tags ON tags.id=link_tags."tagId"
        WHERE tags.name=$1;
      `, [tagName]);
  
      return await Promise.all(linkIds.map(
        link => getLinkById(link.id)
      ));
   
  } 

// private
async function getLinkById(linkId) {
 
      const { rows: [ link ]  } = await db.query(`
        SELECT *
        FROM links
        WHERE id=$1;
      `, [linkId]);
  
      if (!link) {
        throw {
          name: "LinkNotFoundError",
          message: "Could not find a Link with that linkId"
        };
      }
    
      const { rows: tags } = await db.query(`
        SELECT tags.*
        FROM tags
        JOIN link_tags ON tags.id=link_tags."tagId"
        WHERE link_tags."linkId"=$1;
      `, [linkId])
  
      link.tags = tags;
  
      console.log('>>>>>getLinkById', link);

      return link;
  }

// public
async function createLink({ name, url, comment, tags = [] }) {
    
    try {
    
        const { rows: [ link ] } = await db.query(`
    
        INSERT INTO links(name, url, comment)
        VALUES($1,$2,$3)
        ON CONFLICT (url) DO NOTHING
        RETURNING *;
        `, [name, url, comment]);

        if (link === undefined) {
            throw new Error("Link already exists. Try update instead.");
        }

        const tagList = await createTags(tags);
  
        return await addTagsToLink(link.id, tagList);

    } catch(error){
        throw error;
    }
}

async function createTags(tags) {
    
    if (tags.length === 0) { 
       return; 
    }

    const insertValues = tagList.map(
       (_, index) => `$${index + 1}`).join('), (');
    
   // note: 
     const selectValues = tagList.map(
       (_, index) => `$${index + 1}`).join(', ');
    
   await client.query(`
   
       INSERT INTO tags(name)
       VALUES (${ insertValues })
       ON CONFLICT (name) DO NOTHING;
       ` , tags
   );
   
       const { rows } = await db.query(`
       
       SELECT * FROM tags
       WHERE name
       IN (${ selectValues }); `
       , tags );

       return rows;

}

// private
async function addTagsToLink(linkId, tagList) {

      const createLinkTagPromises = tagList.map(
        tag => createLinkTag(linkId, tag.id)
      );
  
      await Promise.all(createLinkTagPromises);
  
      return await getLinkById(linkId);
  
}

// public
async function deleteLink(linkId) {
   
    const { rows: linkTags } = await db.query(`
        
        DELETE FROM link_tags
        WHERE "linkId" = ${linkId}
        RETURNING *;
    `)
    
    const { rows: [link] } = await db.query(`
        DELETE FROM links
        WHERE id=${linkId}
        RETURNING *;
    `)
        
    console.log('>>>>>deleteLink', link, 'tags: ',linkTags);

    return link;

}

// public
async function updateLink(urlId, fields = {}) {

    const { tags } = fields;
    delete fields.tags;

    const setString = Object.keys(fields).map(
        (key, index) => `"${ key }"=$${ index + 1 }`
    ).join(', ');

    if (setString.length > 0) {
         await client.query(`
              UPDATE links
              SET ${ setString }
              WHERE id=${ urlId }
              RETURNING *;
              `, Object.values(fields));
    };

    if (tags === undefined) {
         return await getLinkById(urlId);
     };

     const tagList = await createTags(tags);
     const tagListIdString = tagList.map(
         tag => `${ tag.id }`
     ).join(', ');

     await client.query(`
          DELETE FROM link_tags
          WHERE "tagId"
          NOT IN (${ tagListIdString })
          AND "urlId"=$1;
      `, [ urlId ]);

     await addTagsToLink(urlId, tagList);

     return await getLinkById(urlId);
    
};


module.exports = {

    createLink,
    getAllLinks,
    getLinkByTagName,
    deleteLink,
    updateLink,
    getLinkById
}