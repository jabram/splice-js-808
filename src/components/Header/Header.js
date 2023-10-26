import React from "react";
import styles from "./Header.module.css";
import ButtonHeader from "../ButtonHeader/ButtonHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faPlay } from "@fortawesome/free-solid-svg-icons";
import TextInput from "../TextInput/TextInput";
import SequenceSwitcher from "../SequenceSwitcher/SequenceSwitcher";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>JS-808</h1>
      <div className={styles.controls}>
        <ButtonHeader onClick={() => console.log("clicked stop")}>
          <FontAwesomeIcon icon={faStop} />
        </ButtonHeader>
        <ButtonHeader onClick={() => console.log("clicked play")}>
          <FontAwesomeIcon icon={faPlay} />
        </ButtonHeader>
        <TextInput
          label="BPM"
          currentValue={4}
          onChange={() => console.log("changed!")}
        />
        <SequenceSwitcher />
      </div>
    </header>
  );
};

export default Header;
