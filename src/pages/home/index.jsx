import styles from "./styles.module.css";
import Nav from "../../components/nav";
import Main from "../../components/main";

function Home() {
  return (
    <div className={styles.home_container}>
      <Nav />
      <Main />
    </div>
  );
}

export default Home;
