const pg = require('pg');

const dbConfig = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new pg.Pool(dbConfig);
pool.on('error', (err) => {
    console.log('idle client error', err.message, err.stack);
});

module.exports = pool;