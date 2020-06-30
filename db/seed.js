const { db } = require('./database.js');
const { createLink } = require('./links');
const { createTag } = require('./tags');
const { addTagToLink } = require('./link_tags');
db.connect();

async function dropTables(force = false) {

    if (force) {
        
        db.query(`
            DROP TABLE IF EXISTS link_tags;
            DROP TABLE IF EXISTS links;
            DROP TABLE IF EXISTS tags;
        `);
    }
}

async function createTables () {
  
    try {
        await db.query(`
            CREATE TABLE links (
                id SERIAL PRIMARY KEY,
                link VARCHAR(255) UNIQUE NOT NULL,
                comment TEXT NOT NULL,
                clicks INTEGER DEFAULT 1,
                date DATE NOT NULL DEFAULT CURRENT_DATE
            );
        `)
        console.log(`> links table created`);

        await db.query(`
            CREATE TABLE tags (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL
            );
        `);
        console.log(`> tags table created`);

        await db.query(`
            CREATE TABLE link_tags (
                id SERIAL PRIMARY KEY,
                "linkId" INTEGER REFERENCES links(id) ON DELETE CASCADE,
                "tagId" INTEGER REFERENCES tags(id),
                UNIQUE ("linkId", "tagId")
            );
        `);
        console.log(`> link_tags table created`);

    } catch (e) {
        console.error(e)
    }
}

async function createInitialData () {

    try {
       
        await createLink ({ link: "http://google.com", comment: "Search for everything"});
        await createLink ({ link: "http://reddit.com", comment: "Talk about anything"});

        await createTag ({name: "tags"});

        await addTagToLink({linkId: 1, tagId: 1});

    } catch (e) {
        console.error(e)
    }
   
}

async function seed () {

    console.log(`> Seeding DB`)
    try {
        await dropTables(true);
        await createTables();
        await createInitialData();
    } catch (e) {
        console.error(e)
    }
}

seed()
    .then(console.error)
    .finally(()=> db.end())