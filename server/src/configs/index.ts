import * as dotenv from 'dotenv'
dotenv.config();
export default {
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 3001,
    db: {
        nameDB: process.env.DB_TEST_NAME || ''
    },
    auth: {
        screctKey: process.env.SECRET_KEY || ''
    },
    log: {
        dir: process.env.LOGGING_DIR || '',
        level: process.env.LOGGING_LEVEL || ''
    }
}