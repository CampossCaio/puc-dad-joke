"use client";

import Link from "next/link";
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

import { useAuthWithContext } from "@src/hooks/useAuthWithContext";
//import { useAuthWithRedux } from "@src/hooks/useAuthwithRedux";
import { useRouter } from "next/navigation";

export const Header = () => {
  const route = useRouter();
  const { user } = useAuthWithContext();
  //const { user } = useAuthWithRedux();

  return (
    <header className={styles.header}>
      <p>Puc Dad Joke</p>

      <div className={styles.links}>
        <Link href="/">
          <FontAwesomeIcon icon={faShuffle} />
          Random joke
        </Link>
        <Link href="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search jokes
        </Link>

        {user && (
          <Link href="/submit">
            <FontAwesomeIcon icon={faPenToSquare} />
            Submit new joke
          </Link>
        )}

        {user ? (
          <Tooltip text={user.name}>
            <div className={styles.avatar}>{getInitialsFrom(user.name)}</div>
          </Tooltip>
        ) : (
          <Tooltip text="Sign in to submit new jokes">
            <Button onClick={() => route.push("/login")} variant="tertiary">
              Sign in
            </Button>
          </Tooltip>
        )}
      </div>
    </header>
  );
};
