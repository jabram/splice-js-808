import React from "react";
import PropTypes from "prop-types";
import styles from "./NodeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const NodeButton = ({ isOn }) => {
  return (
    <button className={styles.nodeButton}>
      {isOn && <FontAwesomeIcon icon={faCircle} className={styles.dot} />}
    </button>
  );
};

NodeButton.propTypes = {
  isOn: PropTypes.bool,
};

NodeButton.defaultProps = {
  isOn: false,
};

export default NodeButton;
