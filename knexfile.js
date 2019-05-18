require('dotenv').config();
module.exports = {
    development: {
        client: 'pg',
        connection: {
          host : 'localhost',
          user : 'postgres',
          port : process.env.dbport,
          password : process.env.dbpass,
          database : 'ducktracker'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};