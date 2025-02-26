import { GetJokesResponse } from "@src/services/JokeService";
import { use } from "react";
import { Joke } from "../Joke";

export function Jokes({ jokes }: { jokes: Promise<GetJokesResponse> }) {
  const { jokes: allJokes } = use(jokes);

  return (
    <div>
      {allJokes?.map((joke) => (
        <Joke key={joke.id} text={joke.text} />
      ))}
    </div>
  );
}
