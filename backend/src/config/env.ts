import dotenv from 'dotenv';
import { z } from 'zod';

// Load variables from a .env file
dotenv.config();

// Define exactly what our environment variables must look like
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('5000'),
  MONGO_URI: z.string().url("MONGO_URI must be a valid URL string"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ CRITICAL ERROR: Invalid environment variables detected:');
  console.error(_env.error.format());
  process.exit(1); 
}

export const env = _env.data;