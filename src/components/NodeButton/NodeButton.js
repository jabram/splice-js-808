import React from "react";
import PropTypes from "prop-types";
import styles from "./NodeButton.module.css";

const NodeButton = ({ isOn }) => {
  return <button className={styles.nodeButton}>{isOn ? "yes" : "no"}</button>;
};

NodeButton.propTypes = {
  isOn: PropTypes.bool,
};

NodeButton.defaultProps = {
  isOn: false,
};

export default NodeButton;
