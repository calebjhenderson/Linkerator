require('dotenv').config();

const PORT  = process.env.PORT || 3000;
const express = require ('express');
const server = express();
const chalk = require('chalk')
const path = require('path')

const morgan = require('morgan');
server.use(morgan('dev'));

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const { db  } = require('./db/database.js');

const DIST_PATH = path.join(__dirname, './public' )
server.use(express.static(DIST_PATH))

const ROUTES = path.join(__dirname,'./routes/routers.js')
server.use(express.static(ROUTES))


server.listen(PORT, ()=>{
    console.log(chalk.cyan('Server is up on port', PORT))
    try{
        db.connect();
        console.log('Connected to the database!')
    }catch(e){throw e}
});

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
});

server.get('/health', (req, res, next)=>{
    res.send('Server is active');
  });

const apiRouter = require('./routes/routers.js')
server.use('/api',apiRouter)