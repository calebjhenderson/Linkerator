async function createTags(tags) {

    // looping through tags array and do insert on each new tag
    // https://www.postgresqltutorial.com/postgresql-upsert/
    

        const { rows:insertedTags } = await db.query(`
            INSERT INTO tags(name)
            VALUES (${tagsString})
            RETURNING *;
            `,Object.values(tags)
        );

        console.log('>>>>>createTags', insertedTags);

        return insertedTags;

    
}