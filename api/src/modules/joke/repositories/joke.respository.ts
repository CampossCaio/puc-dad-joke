import { randomUUID } from 'crypto';
import { CreatejokeDTO } from '../dtos/create-joke-dto';
import { Joke } from '../entities/Joke';
import { IJokeRepository } from '../interfaces/IJokeRepository';
import { knex } from '../../../db';

class JokeRepository implements IJokeRepository {
  async create({ text }: CreatejokeDTO): Promise<Joke> {
    const joke = await knex('jokes')
      .insert({
        id: randomUUID(),
        text,
      })
      .returning('*');

    return joke[0] as Joke;
  }

  async findAll(
    query: string,
  ): Promise<{ jokes: Joke[] | undefined; totalOfItems: number }> {
    const jokesQuery = knex('jokes').select('*');

    if (query) {
      jokesQuery.where(
        knex.raw('LOWER(text)'),
        'like',
        `%${query.toLowerCase()}%`,
      );
    }

    const result = await knex
      .select('*', knex.raw('COUNT(*) OVER() as total_of_items'))
      .from(knex.raw('(?) as subquery', [jokesQuery]));

    const jokes = result.map((row) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { total_of_items, ...joke } = row;
      return joke as Joke;
    });

    const totalOfItems =
      result.length > 0 ? Number(result[0].total_of_items) : 0;

    return { jokes, totalOfItems };
  }

  async getRandom(): Promise<Joke> {
    const randomJoke = await knex('jokes')
      .select('*')
      .orderByRaw('RANDOM()')
      .first();

    return randomJoke as Joke;
  }
}

export default JokeRepository;
