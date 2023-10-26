import React from "react";
import PropTypes from "prop-types";
import styles from "./Sequence.module.css";
import NodeButton from "../NodeButton/NodeButton";
import instruments from "../../data/instruments.json";

const Sequence = ({ data, toggleNode }) => {
  return (
    <div className={styles.sequenceContainer}>
      <div className={`${styles.column} ${styles.instrumentName}`}>
        <p>&nbsp;</p>
        {instruments.map((instrument) => (
          <p key={instrument.slug}>{instrument.label}</p>
        ))}
      </div>
      {data.map((step, index) => (
        <div className={styles.column} key={`step${index + 1}`}>
          <p>{index + 1}</p>
          {instruments.map((instrument) => (
            <NodeButton
              key={`step${index + 1}-${instrument.slug}`}
              isOn={step[instrument.slug]}
              toggleNode={() => toggleNode(index, instrument.slug)}
            />
          ))}
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
