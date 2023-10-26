import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sequence from "./components/Sequence/Sequence";
import mockSequences from "./data/sequences.json";

function App() {
  const [sequenceData, setSequenceData] = useState(mockSequences);

  const toggleNode = (stepIndex, instrument) => {
    setSequenceData(
      [...sequenceData],
      (sequenceData[stepIndex][instrument] =
        !sequenceData[stepIndex][instrument])
    );
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <Sequence data={sequenceData} toggleNode={toggleNode} />
    </div>
  );
}

export default App;
