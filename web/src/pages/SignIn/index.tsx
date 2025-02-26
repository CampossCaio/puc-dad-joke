import { Button } from "@src/components/Button";
import styles from "./styles.module.css";
import PucImage from "@src/assets/brasaocor.png";
import { FormEvent, useState } from "react";

import { FontAwesomeIcon } from "../../lib/fontawesome";
import { faSpinner } from "../../lib/fontawesome/solid";

import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import AuthService, { User } from "@src/services/AuthService";

export function SignIn({ setUser }: { setUser: (user: User) => void }) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);

      const user = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const authenticatedUser = await AuthService.signin(user);

      setUser(authenticatedUser);
      navigate("/");
    } catch {
      toast("Invalid email or password", { type: "error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <img src={PucImage} alt="Puc Dad Joke" />
      <h1>Sign in to Puc Dad Joke</h1>
      <form onSubmit={handleSubmit}>
        <label>Email address</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        {/* <input type="password" name="password" required /> */}
        <input type="text" name="password" required />

        <Button type="submit">
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
