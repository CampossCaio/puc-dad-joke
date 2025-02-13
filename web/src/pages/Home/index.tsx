import styles from "./styles.module.css";
import { Button } from "@src/components/Button";

import { faShuffle } from "../../lib/fontawesome/solid";

import { faShareFromSquare, faCopy } from "@src/lib/fontawesome/solid";
import { FontAwesomeIcon } from "@src/lib/fontawesome";

export function Home() {
  return (
    <main style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <h1>Random dad joke:</h1>
        <Button onClick={() => {}}>
          <FontAwesomeIcon icon={faShuffle} /> New Joke
        </Button>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <p>
              I got a new pen that can write under water. It can write other
              words too.
            </p>
          </div>
          <div className={styles.cardFooter}>
            <a>
              <FontAwesomeIcon icon={faCopy} />
              Copy
            </a>
            <a onClick={() => {}}>
              <FontAwesomeIcon icon={faShareFromSquare} />
              Share on Twitter
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
