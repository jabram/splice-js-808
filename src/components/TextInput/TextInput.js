import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.css";

const TextInput = ({ currentValue, label, onChange }) => {
  return (
    <div>
      <input
        id={label}
        className={styles.textInput}
        value={currentValue}
        onChange={onChange}
      />
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

TextInput.propTypes = {
  currentValue: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  currentValue: undefined,
  label: undefined,
  onChange: undefined,
};

export default TextInput;
