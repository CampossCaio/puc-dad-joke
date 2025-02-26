"use client";

import { GetJokesResponse } from "@src/services/JokeService";
import { use } from "react";

export function JokesCount({ jokes }: { jokes: Promise<GetJokesResponse> }) {
  const { totalOfItems } = use(jokes);
  // carreda no servidor
  return (
    <span className="styles">
      <strong>{totalOfItems}</strong> jokes found
    </span>
  );
}
