import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: '../../.env' });
dotenv.config();

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  APP_NAME: z.string().default('OpenClaw Cloud Agents'),
  JWT_SECRET: z.string().min(8).default('change-me-in-production'),
  API_PORT: z.coerce.number().default(8080),
  OPENCLAW_GATEWAY_URL: z.string().url().optional(),
  OPENCLAW_API_KEY: z.string().optional(),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(60000),
  RATE_LIMIT_MAX: z.coerce.number().default(120)
});

export const env = schema.parse(process.env);
