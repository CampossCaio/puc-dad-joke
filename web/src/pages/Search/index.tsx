import styles from "./styles.module.css";
import { Button } from "../../components/Button";
import { Joke } from "./components/Joke";
import { useState } from "react";

import { useJokes } from "@src/hooks/useJokes";

export function Search() {
  const [query, setQuery] = useState<string | undefined>(undefined);
  const [searchedTerm, setSearchedTerm] = useState("");

  const { jokesQuery } = useJokes(query);

  const { data } = jokesQuery;

  function handleSearch() {
    setQuery(searchedTerm);
  }

  return (
    <div style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <span className="styles">
          <strong>{data?.totalOfItems}</strong> jokes found
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
          {data?.jokes?.map((joke) => (
            <Joke key={joke.id} text={joke.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
