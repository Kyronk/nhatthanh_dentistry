// require("dotenv").config();
// require('dotenv').config();
// import dotenv from "dotenv";
// dotenv.config();

// module.exports = {
//     development: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: "127.0.0.1",
//         dialect: process.env.DB_DIALECT,
//         logging: false,
//         timezone: "+07:00"

//         username: "postgres",
//         password: "1234",
//         database: "dentistry_nhathanh",
//         host: "127.0.0.1",
//         dialect: "postgres",
//         logging: false,
//         timezone: "+07:00"
//     },
// }


// const config = {
//     development: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: "127.0.0.1",
//         dialect: process.env.DB_DIALECT,
//         logging: false,
//         timezone: "+07:00"
//     }
// }

// export default config

// import config from 'my/app/config';

// const env = process.env.NODE_ENV || 'development';

// export default {
//     'development': {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         host: "127.0.0.1",
//         dialect: process.env.DB_DIALECT,
//         logging: false,
//         timezone: "+07:00"
//     }
// };


import config from 'my/app/config';

const env = process.env.NODE_ENV || 'development';

export default {
    [env]: {
        url: config.mysql.migrate,
        dialect: 'mysql',
        migrationStorageTableName: 'SequelizeMeta'
    }
};