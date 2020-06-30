const { db } = require('./database.js');
const { getTagByName } = require('./tags')

async function getLinksByTag (name) {

        const {id: linkId} = await getTagByName(name);
        const { rows } = await db.query(`
            SELECT *
            FROM link_tags AS lt
            RIGHT JOIN links AS l
            ON lt."linkId" = l.id
            WHERE lt.id=$1;
        `, [linkId]);

        return rows;
    
}

async function getTagsByLink ({id}) {

        const { rows } = await db.query(`
            SELECT *
            FROM link_tags AS lt
            LEFT JOIN tags AS t
            ON lt."tagId" = t.id
            WHERE lt."linkId"=$1;
        `, [id]);

        return rows;
   
}

async function addTagToLink ({linkId, tagId}) {
    try {

        await db.query(`
            INSERT INTO link_tags ("linkId", "tagId")
            VALUES ($1, $2)
            RETURNING *;
        `, [linkId, tagId]);

        const {rows: response} = await db.query(`
                SELECT * 
                FROM links
                WHERE id=$1;
            `, [linkId]);

        return {status: "success", message: "Tag added to link", response};
    } catch (e) {
        console.error(e);
        return {status: "failed", message: "Could not add tag to link"}; 
    }
}

async function removeTagFromLink ({linkId, tagId}) {
    try {
        await db.query(`
        DELETE FROM link_tags
        WHERE "linkId"=$1
        AND "tagId"=$2;
        `, [linkId, tagId]);

        return {status: "success",message: "Tag removed from link"};
    } catch (e) {
        console.error(e);
        return {status: "failed", message: "Could not remove tag"};
    }
}

module.exports = {
    getTagsByLink,
    getLinksByTag,
    addTagToLink,
    removeTagFromLink
}