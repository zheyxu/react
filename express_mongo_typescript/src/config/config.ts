import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME ?? '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD ?? '';
const MONGO_URL = process.env.MONGO_URI ?? '';

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
