import styles from "./styles.module.css";
import { Button } from "../../components/Button";
import { Joke } from "./components/Joke";
import { useCallback, useEffect, useState } from "react";
import JokeService, { Joke as IJoke } from "@src/services/JokeService";

export function Search() {
  const [jokes, setJokes] = useState<IJoke[]>();
  const [totalOfItems, setTotalOfItems] = useState(0);
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [searchedTerm, setSearchedTerm] = useState("");

  const getJokes = useCallback(async () => {
    try {
      const { jokes, totalOfItems } = await JokeService.getJokes({
        query,
      });

      console.log(query);
      setJokes(jokes);
      setTotalOfItems(totalOfItems);
    } catch {
      console.error("Failed to get jokes");
    }
  }, [query]);

  useEffect(() => {
    getJokes();
  }, [getJokes]);

  function handleSearch() {
    setQuery(searchedTerm);
  }

  return (
    <div style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <span className="styles">
          <strong>{totalOfItems}</strong> jokes found
        </span>
        <div className={styles.search}>
          <input
            value={searchedTerm}
            onChange={(e) => setSearchedTerm(e.target.value)}
            type="text"
            placeholder="Search terms..."
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>

      <div className={styles.content}>
        <span>Joke</span>
        <div className={styles.jokes}>
          {jokes?.map((joke) => (
            <Joke key={joke.id} text={joke.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
