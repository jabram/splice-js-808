import React from "react";
import PropTypes from "prop-types";
import styles from "./Sequence.module.css";
import NodeButton from "../NodeButton/NodeButton";

const Sequence = ({ data, toggleNode }) => {
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
          <NodeButton
            isOn={step.kick}
            toggleNode={() => toggleNode(index, "kick")}
          />
          <NodeButton
            isOn={step.snare}
            toggleNode={() => toggleNode(index, "snare")}
          />
          <NodeButton
            isOn={step.openHat}
            toggleNode={() => toggleNode(index, "openHat")}
          />
          <NodeButton
            isOn={step.closedHat}
            toggleNode={() => toggleNode(index, "closedHat")}
          />
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
  toggleNode: PropTypes.func.isRequired,
};

Sequence.defaultProps = {
  data: undefined,
  toggleNode: undefined,
};

export default Sequence;
