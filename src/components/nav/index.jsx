import styles from "./styles.module.css";
import cooljobLogo from "../../assets/icons/Cooljob.svg";
function Nav() {
  return (
    <div className={styles.nav_container}>
      <img src={cooljobLogo} alt="cooljob_logo" />
      <div className={styles.nav_menu}>
        <div>
          <a href="#">Поиск работы</a>
          <a href="#">Поиск стартапов</a>
        </div>
        <div>
          <a href="#">Регистрация</a>
          <button className={styles.login_btn}>Вход</button>
        </div>
      </div>
    </div>
  );
}
export default Nav;
