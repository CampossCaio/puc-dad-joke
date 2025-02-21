import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

export function Button({
  children,
  variant = "primary",

  ...rest
}: ButtonProps) {
  return (
    <button className={classNames(styles.button, styles[variant])} {...rest}>
      {children}
    </button>
  );
}
