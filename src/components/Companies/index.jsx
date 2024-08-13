import styles from "./styles.module.css";
import Disney_logo from "../../assets/icons/Disney_logo.svg";
import Facebook_logo from "../../assets/icons/Facebook_logo.svg";
import Microsoft_logo from "../../assets/icons/Microsoft_logo.svg";
import Sony_logo from "../../assets/icons/Sony_logo.svg";
import CocaCola_logo from "../../assets/icons/CocaCola_logo.svg";
function Companies() {
  return (
    <div className={styles.companies_container}>
      <p className={styles.text}>Помогаем найти работу:</p>
      <div className={styles.companies_logos}>
        <img src={Disney_logo} alt="Disney" className={styles.logo} />
        <img src={Facebook_logo} alt="Facebook" className={styles.logo} />
        <img src={Microsoft_logo} alt="Microsoft" className={styles.logo} />
        <img src={Sony_logo} alt="Sony" className={styles.logo} />
        <img src={CocaCola_logo} alt="CocaCola" className={styles.logo} />
      </div>
    </div>
  );
}
export default Companies;
