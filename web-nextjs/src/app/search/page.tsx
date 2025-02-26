import styles from "./styles.module.css";
import JokeService from "@src/services/JokeService";
import { JokesCount } from "./components/JokesCount";
import { Suspense } from "react";
import { Jokes } from "./components/Jokes";
import { Search } from "./components/Search";

export default async function SearchPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  const jokes = JokeService.getJokes({
    query,
  });

  return (
    <div style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <JokesCount jokes={jokes} />
        <Search />
      </div>

      <div className={styles.content}>
        <span>Joke</span>
        <Suspense fallback={<div>Loading...</div>}>
          <Jokes jokes={jokes} />
        </Suspense>
      </div>
    </div>
  );
}
