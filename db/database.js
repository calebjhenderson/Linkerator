const { Client } = require('pg'); 
const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/linkerator_dev';

const db = new Client(DATABASE_URL);

module.exports = { db };