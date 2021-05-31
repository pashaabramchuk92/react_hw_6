import "./styles.css";
import Footer from "./components/footer/Footer";
import AddNote from "./components/AddNote"
import ListNotes from "./components/ListNotes";
import SetCompleteNotes from "./components/SetCompleteNotes";

const App = () => {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddNote />
      </header>
      <section className="main">
        <SetCompleteNotes />
        <ListNotes />
      </section>
      <Footer />
    </section>
  );
}

export default App;
