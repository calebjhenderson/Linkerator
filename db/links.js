const { db } = require ('./database');


async function createLink({link, comment }) {


        const {rows: [newLink]} = await db.query(`
            INSERT INTO links("link", "comment") VALUES ($1, $2)
            RETURNING *;
            `, [link, comment]
        );

        console.log('>>>>>createLink', newLink);

   
}


async function deleteLink(linkId) {
   
    try {

        const { rows: linkTags } = await db.query(`
        
            DELETE FROM links_tags
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

    } catch (error) {
        throw error;
    }


}


module.exports = {
    createLink,
    deleteLink
}