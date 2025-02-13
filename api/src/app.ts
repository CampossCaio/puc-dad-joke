import fastify from 'fastify';
import cors from '@fastify/cors';

import { jokeRoute } from './modules/joke/routes/joke.route';

export const app = fastify();

// plugins
app.register(cors, { origin: '*' });

// Routes
app.register(jokeRoute, { prefix: '/joke' });
