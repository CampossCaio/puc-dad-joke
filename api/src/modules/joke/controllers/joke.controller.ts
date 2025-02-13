import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import JokeService from '../services/joke.service';
import JokeRepository from '../repositories/joke.respository';

class JokeController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const createJokeSchema = z.object({
      text: z.string(),
    });

    console.log(request.body);

    const { text } = createJokeSchema.parse(request.body);

    const jokeService = new JokeService(new JokeRepository());

    const joke = await jokeService.create({ text });
    return reply.status(201).send(joke);
  }

  /**
   * @todo add pagination
   */
  async get(request: FastifyRequest, reply: FastifyReply) {
    const listJokeSchema = z.object({
      query: z.string().optional(),
    });

    const { query } = listJokeSchema.parse(request.query);

    const jokeService = new JokeService(new JokeRepository());

    const jokes = await jokeService.get({ query: query || '' });

    return reply.send(jokes);
  }

  async getRandom(request: FastifyRequest, reply: FastifyReply) {
    const jokeService = new JokeService(new JokeRepository());

    const joke = await jokeService.getRandom();

    return reply.send(joke);
  }
}

export default JokeController;
