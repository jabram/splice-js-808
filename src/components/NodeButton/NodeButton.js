import React from "react";
import PropTypes from "prop-types";
import styles from "./NodeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const NodeButton = ({ isOn, toggleNode }) => {
  return (
    <button className={styles.nodeButton} onClick={toggleNode}>
      {isOn && <FontAwesomeIcon icon={faCircle} className={styles.dot} />}
    </button>
  );
};

NodeButton.propTypes = {
  isOn: PropTypes.bool,
  toggleNode: PropTypes.func.isRequired,
};

NodeButton.defaultProps = {
  isOn: false,
  toggleNode: undefined,
};

export default NodeButton;
