// import { config } from 'dotenv';
//import 'dotenv/config';
import dotenv from 'dotenv';

import { z } from 'zod';

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config();
}

const envSchema = z.object({
  NODE_ENV: z.enum(['production', 'test', 'development']).default('production'),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  DATABASE_CLIENT: z.enum(['sqlite', 'pg']),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Invalid environment variable!');

  throw new Error('Invalid environment variable');
}

export const env = _env.data;
