import { Button } from "../../../../components/Button";
import { faCopy } from "../../../../lib/fontawesome/solid";
import { FontAwesomeIcon } from "../../../../lib/fontawesome";
import styles from "./styles.module.css";

export type JokeProps = {
  text: string;
};

export function Joke({ text }: JokeProps) {
  return (
    <div className={styles.joke}>
      <p>{text}</p>
      <Button variant="secondary" onClick={() => {}}>
        <FontAwesomeIcon icon={faCopy} />
        Copy
      </Button>
    </div>
  );
}
