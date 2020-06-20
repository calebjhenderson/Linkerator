async function createLinkTags(linkId, tagId) {

    try {
   
        const { rows:tags } = await db.query(`
            INSERT INTO link_tags("tagId", "linkId")
            VALUES($1, $2)
            ON CONFLICT("tagId", "linkId") DO NOTHING
            RETURNING *;
        `, [tagId, linkId]
        );

        console.log('>>>>>createLinkTags', tags);

    } catch (error) {
        throw error;
    }
}