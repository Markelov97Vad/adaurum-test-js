import Helper from "../Helper/Helper";
import Files from "../Files/Files";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./App.module.scss";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Files/>
        <Helper/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
