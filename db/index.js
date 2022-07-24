const {
    DB_USER,
    DB_NAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT
} = process.env;
const pg = require('pg');

const dbConfig = {
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(dbConfig);
pool.on('error', (err) => {
    console.log('idle client error', err.message, err.stack);
});

module.exports = pool;