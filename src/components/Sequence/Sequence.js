import React from "react";
import PropTypes from "prop-types";
import styles from "./Sequence.module.css";
import NodeButton from "../NodeButton/NodeButton";

const Sequence = ({ data }) => {
  return (
    <div className={styles.sequenceContainer}>
      <div className={`${styles.column} ${styles.instrumentName}`}>
        <p>&nbsp;</p>
        <p>Kick</p>
        <p>Snare</p>
        <p>Open Hat</p>
        <p>Closed Hat</p>
      </div>
      {data.map((step, index) => (
        <div className={styles.column} key={`step${index + 1}`}>
          <p>{index + 1}</p>
          <NodeButton isOn={step.kick} />
          <NodeButton isOn={step.snare} />
          <NodeButton isOn={step.openHat} />
          <NodeButton isOn={step.closedHat} />
        </div>
      ))}
    </div>
  );
};

Sequence.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kick: PropTypes.bool,
      snare: PropTypes.bool,
      openHat: PropTypes.bool,
      closedHat: PropTypes.bool,
    })
  ).isRequired,
};

Sequence.defaultProps = {
  data: undefined,
};

export default Sequence;
