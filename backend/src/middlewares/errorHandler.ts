import { Request, Response, NextFunction } from "express";
import { env } from '../config/env.js';
import { success } from "zod";
import { error } from "node:console";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error('Error: ', err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        error: {
            code: err.code || 'INTERNAL_SERVER_ERROR',
            message: err.message || 'Something went wrong on the server',

            // Only show detailed stack traces in development mode for secuirity
            details: env.NODE_ENV === 'development' ? err.stack : undefined,
        },
    });
};

// Also catch completely unmatched routes (404)
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ 
        success: false, 
        error: {
            code: 'NOT FOUND',
            message: `cannont find ${req.method} ${req.originalUrl}`
        }
    });
};

