import { FormEvent } from "react";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";

export function Submit() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div style={{ padding: "50px 80px" }}>
      <div className={styles.description}>
        <p>
          All submitted jokes will be reviewed to ensure they are not duplicates
          of existing jokes and are appropriate for the site.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Joke:</span>
          <textarea className={styles.textArea} name="joke" required />
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
