import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(env.MONGO_URI);
        console.log(`Connected to MongoDB ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`MongoDB Connection error: ${error.message}`);
        // If we can't connect to database, the server is useless. Exit!
        process.exit(1); 
    }
};
