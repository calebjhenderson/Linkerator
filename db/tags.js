const { db } = require('./database.js');

async function getAllTags () {

        const { rows } = await db.query(`
            SELECT * 
            FROM tags;
        `);

        return rows;
   
}

async function getTagByName (name) {
   
        const { rows } = await db.query(`
            SELECT * 
            FROM tags
            WHERE name=$1;
        `, [name]);

        return rows;
  
}

async function createTag ({name}) {
   
        const { rows } = await db.query(`
            INSERT INTO tags (name)
            VALUES ($1)
            RETURNING *;
        `, [name]);

        return rows;
   
}

module.exports = {
    getAllTags,
    getTagByName,
    createTag
}