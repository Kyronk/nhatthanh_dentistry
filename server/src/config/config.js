require("dotenv").config();


module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: "127.0.0.1",
        dialect: process.env.DB_DIALECT,
        logging: false,
        timezone: "+07:00"

        // username: "postgres",
        // password: "1234",
        // database: "dentistry_nhathanh",
        // host: "127.0.0.1",
        // dialect: "postgres",
        // logging: false,
        // timezone: "+07:00"
    },
}