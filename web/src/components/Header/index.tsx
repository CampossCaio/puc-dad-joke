// import { NavLink } from "react-router";
import { FontAwesomeIcon } from "../../lib/fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faShuffle,
} from "../../lib/fontawesome/solid";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>Puc Dad Joke</p>
      <div className={styles.links}>
        {/* Using NavLink from react-router to add active class */}
        <a>
          <FontAwesomeIcon icon={faShuffle} />
          Random joke
        </a>

        <a>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search jokes
        </a>

        <a>
          <FontAwesomeIcon icon={faPenToSquare} />
          Submit new joke
        </a>
      </div>
    </header>
  );
};
