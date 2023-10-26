import styles from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div>sequence content goes here</div>
    </div>
  );
}

export default App;
