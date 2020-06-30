const { db } = require('./database.js');
const { getTagsByLink } = require('./link_tags')

async function getAllLinks () {

        const {rows: links} = await db.query(`
            SELECT * FROM links;
        `);

        const results = links.map(async (link) => {
            const tags = await getTagsByLink(link);
            link.tags = tags;
            return link;
        });

        const linkObj = await Promise.all(results).then((arr) => {
            return arr;
        });

        return linkObj;

}

async function getLinkById(id) {

        const {rows: links} = await db.query(`
            SELECT * 
            FROM links
            WHERE id=$1;
        `, [id]);

        return links[0];
   
}

async function createLink({link, comment}) {

        const { rows } = await db.query(`
            INSERT INTO links (link, comment)
            VALUES ($1, $2)
            RETURNING *;
        `, [link, comment]);

        return rows;
  
}

async function incrementClicks (id) {
  
        const { rows } = await db.query(`
            SELECT * FROM links
            WHERE id=$1;
        `, [id])

        let [{ clicks }] = rows;
        clicks += 1;

        const { rows: link } = await db.query(`
            UPDATE links
            SET clicks=$1
            WHERE id=$2
            RETURNING *;
        `, [clicks, id]);
       
        return link;
 
}

async function updateLink ({id, link, comment}) {
  
        const l = link ? `link='${link}'` : '';
        const c = comment ? `comment='${comment}'` : ''; 
        const setStr = [l, c].join(', ');

        const {rows} = await db.query(`
        UPDATE links
        SET ${setStr}
        WHERE id=$1
        RETURNING *;
    `, [id]);

    return rows;
   
}

async function destroyLink (id) {

        const {rows} = await db.query(`
            DELETE
            FROM links
            WHERE id=$1;
        `, [id])

        return {message: 'Link permanently deleted'}
   
}

module.exports = {
    getAllLinks,
    getLinkById,
    createLink,
    incrementClicks,
    updateLink,
    destroyLink,
}
