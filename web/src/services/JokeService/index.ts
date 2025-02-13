import { axios } from "@src/lib/axios";

const BASE_URL = "http://localhost:3333/joke";
const RANDOM_JOKE_URL = `${BASE_URL}/random`;

export type Joke = {
  id: string;
  text: string;
};

export type GetJokesResponse = {
  jokes: Joke[] | undefined;
  totalOfItems: number;
};

export type GetJokesParams = {
  query?: string;
};

export type CreateJokeParams = {
  joke: string;
};

class JokeService {
  #baseUrl = BASE_URL;

  async createJoke({ joke }: CreateJokeParams): Promise<Joke> {
    try {
      const response = await axios.post(this.#baseUrl, { text: joke });
      return response.data;
    } catch (error) {
      console.error("Failed to create joke: ", error);
      throw new Error("Failed to create joke");
    }
  }

  async getRandomJoke(): Promise<Joke> {
    try {
      const response = await axios.get(RANDOM_JOKE_URL);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch random joke: ", error);
      throw new Error("Failed to fetch random joke");
    }
  }

  async getJokes({ query }: GetJokesParams): Promise<GetJokesResponse> {
    try {
      const response = await axios.get(this.#baseUrl, { params: { query } });
      return response.data;
    } catch (error) {
      console.error("Failed to fetch jokes: ", error);
      throw new Error("Failed to fetch jokes");
    }
  }
}

export default new JokeService();
