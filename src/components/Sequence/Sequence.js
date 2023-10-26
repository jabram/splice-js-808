import React from "react";
import PropTypes from "prop-types";
import styles from "./Sequence.module.css";
import NodeButton from "../NodeButton/NodeButton";

const Sequence = () => {
  return (
    <div className={styles.sequenceContainer}>
      <div className={`${styles.column} ${styles.instrumentName}`}>
        <p>&nbsp;</p>
        <p>Kick</p>
        <p>Snare</p>
        <p>Open Hat</p>
        <p>Closed Hat</p>
      </div>
      <div className={styles.column}>
        <p>1</p>
        <NodeButton />
        <NodeButton />
        <NodeButton />
        <NodeButton />
      </div>
      <div className={styles.column}>
        <p>2</p>
        <NodeButton />
        <NodeButton />
        <NodeButton />
        <NodeButton />
      </div>
      <div className={styles.column}>
        <p>3</p>
        <NodeButton />
        <NodeButton />
        <NodeButton />
        <NodeButton />
      </div>
      <div className={styles.column}>
        <p>4</p>
        <NodeButton />
        <NodeButton />
        <NodeButton />
        <NodeButton />
      </div>
    </div>
  );
};

Sequence.propTypes = {};

Sequence.defaultProps = {};

export default Sequence;
