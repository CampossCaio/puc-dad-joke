import { Button } from "@src/components/Button";
import { faCheck, faCopy } from "@src/lib/fontawesome/solid";
import { FontAwesomeIcon } from "@src/lib/fontawesome";
import styles from "./styles.module.css";
import { useCopyText } from "@src/hooks/useCopytext";

export type JokeProps = {
  text: string;
};

export function Joke({ text }: JokeProps) {
  const { copied, copyTextToClipboard } = useCopyText();

  return (
    <div className={styles.joke}>
      <p>{text}</p>
      <Button variant="secondary" onClick={() => copyTextToClipboard(text)}>
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
