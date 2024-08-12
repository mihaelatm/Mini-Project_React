import styles from "./styles.module.css";
import SearchIcon from "../../assets/icons/search.svg";
import LocationIcon from "../../assets/icons/location.svg";

function Searchbar() {
  return (
    <div className={styles.searchbar_container}>
      <h1 className={styles.title}>
        Один клик <br /> и работа в кармане
      </h1>
      <form className={styles.searchbar_form}>
        <div className={styles.searchbar_input}>
          <img
            src={SearchIcon}
            alt="search_icon"
            className={styles.search_icon}
          />
          <input
            type="text"
            placeholder="Должность или компания"
            className={styles.search_input}
          />
        </div>
        <div className={styles.searchbar_input}>
          <span className={styles.vertical_line}></span>
          <img
            src={LocationIcon}
            alt="location_icon"
            className={styles.location_icon}
          />
          <input
            type="text"
            placeholder="Город, Страна"
            className={styles.location_input}
          />

          <button className={styles.search_btn}>Поиск</button>
        </div>
      </form>
    </div>
  );
}
export default Searchbar;
