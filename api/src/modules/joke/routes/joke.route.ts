import { FastifyInstance } from 'fastify';
import JokeController from '../controllers/joke.controller';

const jokeController = new JokeController();

export async function jokeRoute(app: FastifyInstance) {
  app.get('/random', jokeController.getRandom);
  app.post('/', jokeController.create);
  app.get('/', jokeController.get);
}
