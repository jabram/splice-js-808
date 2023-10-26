import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonHeader.module.css";

const ButtonHeader = ({ onClick, children }) => {
  return (
    <button className={styles.headerButton} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

ButtonHeader.defaultProps = {
  onClick: undefined,
  children: undefined,
};

export default ButtonHeader;
