import { FormEvent } from "react";
import { toast } from "@src/lib/react-toastify";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";
import JokeService from "@src/services/JokeService";
import { useNavigate } from "react-router";

export function Submit() {
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const joke = formData.get("joke") as string;

      await JokeService.createJoke({ joke });

      toast("Joke successfully submitted", { type: "success" });
    } catch {
      toast("Failed to submit joke", { type: "error" });
    } finally {
      navigate("/search");
    }
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
