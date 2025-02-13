import { CreatejokeDTO } from '../dtos/create-joke-dto';
import { Joke } from '../entities/Joke';

export interface IJokeRepository {
  create(joke: CreatejokeDTO): Promise<Joke>;
  findAll(
    query: string,
  ): Promise<{ jokes: Joke[] | undefined; totalOfItems: number }>;
  getRandom(): Promise<Joke | undefined>;
}
