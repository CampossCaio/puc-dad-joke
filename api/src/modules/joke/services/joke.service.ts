import { CreatejokeDTO } from '../dtos/create-joke-dto';
import { GetJokesDTO } from '../dtos/get-jokes-dto';
import { Joke } from '../entities/Joke';

import { IJokeRepository } from '../interfaces/IJokeRepository';

class JokeService {
  constructor(private jokeRepository: IJokeRepository) {}
  async create({ text }: CreatejokeDTO): Promise<Joke> {
    /**
     * @todo check if joke already exists
     */

    const joke = await this.jokeRepository.create({
      text,
    });

    return joke;
  }

  async get({
    query,
  }: GetJokesDTO): Promise<{
    jokes: Joke[] | undefined;
    totalOfItems: number;
  }> {
    const { jokes, totalOfItems } = await this.jokeRepository.findAll(query);

    return { jokes, totalOfItems };
  }

  async getRandom(): Promise<Joke | undefined> {
    const randomJoke = await this.jokeRepository.getRandom();

    return randomJoke;
  }
}

export default JokeService;
