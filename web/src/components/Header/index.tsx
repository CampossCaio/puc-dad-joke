import { NavLink, useNavigate } from "react-router";
import { FontAwesomeIcon } from "../../lib/fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faShuffle,
} from "../../lib/fontawesome/solid";
import styles from "./styles.module.css";
import { Button } from "../Button";

import Tooltip from "../Tooltip";

import { getInitialsFrom } from "@src/utils";

import { User } from "@src/services/AuthService";

export const Header = ({ user }: { user: User | null }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <p>Puc Dad Joke</p>

      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FontAwesomeIcon icon={faShuffle} />
          Random joke
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search jokes
        </NavLink>

        {user && (
          <NavLink
            to="/submit"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
            Submit new joke
          </NavLink>
        )}

        {user ? (
          <Tooltip text={user.name}>
            <div className={styles.avatar}>{getInitialsFrom(user.name)}</div>
          </Tooltip>
        ) : (
          <Tooltip text="Sign in to submit new jokes">
            <Button onClick={() => navigate("/login")} variant="tertiary">
              Sign in
            </Button>
          </Tooltip>
        )}
      </div>
    </header>
  );
};
