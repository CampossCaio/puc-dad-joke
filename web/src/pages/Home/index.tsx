import styles from "./styles.module.css";
import { toast } from "@src/lib/react-toastify";
import { Button } from "@src/components/Button";

import { faShuffle } from "../../lib/fontawesome/solid";

import { FontAwesomeIcon } from "@src/lib/fontawesome";
import { JokeCard } from "./components/JokeCard";
import { useEffect, useState } from "react";
import JokeService, { Joke } from "@src/services/JokeService";

export function Home() {
  const [randomJoke, setRandomJoke] = useState<Joke>();

  const getRandomJoke = async () => {
    try {
      const joke = await JokeService.getRandomJoke();
      setRandomJoke(joke);
    } catch {
      toast("Failed to get random joke", { type: "error" });
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  function handleRandomJoke() {
    getRandomJoke();
  }

  return (
    <main style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <h1>Random dad joke:</h1>
        <Button onClick={handleRandomJoke}>
          <FontAwesomeIcon icon={faShuffle} /> New Joke
        </Button>
      </div>
      <div className={styles.content}>
        <JokeCard joke={randomJoke?.text ?? ""} />
      </div>
    </main>
  );
}
