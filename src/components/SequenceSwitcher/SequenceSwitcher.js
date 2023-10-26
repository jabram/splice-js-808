import React from "react";
import styles from "./SequenceSwitcher.module.css";

const SequenceSwitcher = () => {
  return (
    <select className={styles.sequenceSwitcher}>
      <option>Sequence 1</option>
      <option>Sequence 2</option>
      <option>Sequence 3</option>
    </select>
  );
};

export default SequenceSwitcher;
