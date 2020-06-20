const { db } = require ('./database');

createDB = async (force = false) => {

    try {
        if (force) { 

        await db.query(`
            DROP TABLE IF EXISTS link_tags;
            DROP TABLE IF EXISTS links;
            DROP TABLE IF EXISTS tags;
        `);
        }
  
        console.log('>>>>>createDB', 'tables dropped');

        await db.query(`
            CREATE TABLE IF NOT EXISTS links ( 
                id SERIAL PRIMARY KEY,
                link VARCHAR (255) UNIQUE NOT NULL,
                count INTEGER DEFAULT 1,
                comment TEXT,
                date DATE NOT NULL DEFAULT CURRENT_DATE
            );
        `);

        console.log('>>>>>createDB', 'links table created');

        await db.query(`
            CREATE TABLE IF NOT EXISTS tags ( 
                id SERIAL PRIMARY KEY,
                name TEXT UNIQUE NOT NULL
            );
        `);

        console.log('>>>>>createDB', 'tags table created');

        await db.query(`
            CREATE TABLE IF NOT EXISTS link_tags ( 
                PRIMARY KEY ("linkId", "tagId"),
                "linkId" INTEGER REFERENCES links(id),
                "tagId" INTEGER REFERENCES tags(id)
            );
        `);

        console.log('>>>>>createDB', 'link_tags created');
    
    } catch (error) {
        throw error
    }
}

initDB = async () => {

    try {
      
        await db.query(`
            INSERT INTO links (id, link, count, comment) 
            VALUES (1, 'www.https://javascript.info/', 1, 'great javascript reference')
            ON CONFLICT DO NOTHING
            ;
        `);

        console.log('>>>>>initDB', 'links INSERT completed');

        await db.query(`
            INSERT INTO tags (id, name) 
            VALUES (1, 'javascript, programming')
            ON CONFLICT DO NOTHING
            ;
        `);

        console.log('>>>>>initDB', 'tags INSERT completed');

        await db.query(`
            INSERT INTO link_tags ("linkId", "tagId") 
            VALUES (1, 1)
            ON CONFLICT DO NOTHING
            ;
       `);

        console.log('>>>>>initDB', 'link_tags INSERT completed');

    } catch (error) {
        throw error;
    }

    console.log('db INSERTS completed!');

}

seed = async () => {

    try {

        db.connect();
        console.log('db connected!');

        await createDB();
        await initDB();

        console.log('db seeded!');
    
    } catch (error) {

        throw error;
    }
}

seed()
    .catch(console.error)
    .finally(() => {
        db.end();
    })