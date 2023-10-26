import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sequence from "./components/Sequence/Sequence";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Sequence />
    </div>
  );
}

export default App;
