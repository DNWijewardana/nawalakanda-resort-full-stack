import { env } from './config/env.js';
import app from '../src/app.js'
import { connectDB } from './config/db.js';


const startServer = async () => {
    try {
        // Mongodb connection
        await connectDB();

        // Start the express server
        app.listen(env.PORT, () => {
            console.log(`Server is running in ${env.NODE_ENV} on PORT: ${env.PORT}`);
        });
    } catch (error) {
            console.error('Failed to start the server: ', error);
            process.exit(1);
    }
};

startServer();
