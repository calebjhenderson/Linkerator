const express = require('express');
const apiRouter = express.Router();
const chalk = require('chalk');


const linksRouter = require('./links');
apiRouter.use('/links', linksRouter);

const tagsRouter = require('./tags');
apiRouter.use('/tags', tagsRouter);

const linkTagsRouter = require('./link_tags');
apiRouter.use('/link_tags', linkTagsRouter);



apiRouter.use((error, req, res) => {
    console.log(chalk.yellow('Routing!'))
    res.send(error);
});


module.exports = apiRouter