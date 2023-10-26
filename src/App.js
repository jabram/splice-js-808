import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sequence from "./components/Sequence/Sequence";
import mockData from "./mockData/sequences.json";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Sequence data={mockData} />
    </div>
  );
}

export default App;
