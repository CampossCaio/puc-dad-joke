import styles from "./styles.module.css";
import { Button } from "../../components/Button";
import { Joke } from "./components/Joke";

export function Search() {
  return (
    <div style={{ padding: "50px 80px" }}>
      <div className={styles.heading}>
        <span className="styles">
          <strong>3</strong> jokes found
        </span>
        <div className={styles.search}>
          <input type="text" placeholder="Search terms..." />
          <Button onClick={() => {}}>Search</Button>
        </div>
      </div>

      <div className={styles.content}>
        <span>Joke</span>
        <div className={styles.jokes}>
          <Joke text="What do you call a dog who meditates? Aware wolf." />
          <Joke text="What do you call a dog who meditates? Aware wolf." />
          <Joke text="What do you call a dog who meditates? Aware wolf." />
        </div>
      </div>
    </div>
  );
}
