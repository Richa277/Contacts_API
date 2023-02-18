import ContactList from "./components/ContactList";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <h2 className={styles.h2}>Contacts</h2>
      <ContactList />
    </div>
  );
}

export default App;
