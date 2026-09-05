import express from 'express';
import cors from 'cors'
import helmet from 'helmet'
import { errorHandler, notFoundHandler } from '../src/middlewares/errorHandler.js';
import { success } from 'zod';

const app = express();

// Global Middleware
app.use(helmet()); // Adds secuirity headers automatically
app.use(cors()); 
app.use(express.json());

// Health check route
app.get('/api/v1/health', (req, res) => {
    res.status(200).json({ success: true, message: 'Server is healthy' });
});

// API Routes

// Gloal error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;