import { ReactNode, useState } from "react";

import styles from "./styles.module.css";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.tooltipContainer}>
      <div
        className={styles.tooltipWrapper}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
        {visible && <div className={styles.tooltipBox}>{text}</div>}
      </div>
    </div>
  );
};

export default Tooltip;
