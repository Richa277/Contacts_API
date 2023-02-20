import ContactList from "./components/ContactList";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.app}>
      <h2 className={styles.title}>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default App;
