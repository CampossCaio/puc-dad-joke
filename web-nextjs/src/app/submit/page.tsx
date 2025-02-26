"use client";

import { FormEvent } from "react";
import { toast } from "@src/lib/react-toastify";
import { useRouter } from "next/navigation";
import { createJoke } from "../actions/joke";

import styles from "./styles.module.css";
import { Button } from "@src/components/Button";

export default function Submit() {
  const route = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await createJoke(formData);

    if (result?.error) {
      toast("Failed submiting joke", { type: "error" });
    } else {
      toast("Joke successfully submitted", { type: "success" });
    }
  }

  return (
    <div className={styles.container}>
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
