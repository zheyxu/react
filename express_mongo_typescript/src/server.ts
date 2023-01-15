import { config } from './config/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import Logging from './library/Logging';
import authorRoutes from './routes/Author';
import bookRoutes from './routes/Book';

const router = express();

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.success('Connected to mongoDB');
        StartServer();
    })
    .catch((error) => {
        Logging.error(error.message);
    });

/** Only start the server if Mongo Connects */
const StartServer = () => {
    router.use((req, res, next) => {
        // Log the request
        Logging.info(`Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP : [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            // Log the request
            Logging.info(`Incomming -> Method: [${req.method}] - Url: [${req.url}] - IP : [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });

        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    // Rules of our API
    /** Rules of our API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    // Routes
    router.use('/authors', authorRoutes);
    router.use('/books', bookRoutes);

    // Healthcheck
    router.get('/ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    // Error handling
    router.use((req, res, next) => {
        const error = new Error('not Found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};
