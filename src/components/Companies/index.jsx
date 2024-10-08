import styles from "./styles.module.css";
import Disney_logo from "../../assets/icons/Disney_logo.svg";
import Facebook_logo from "../../assets/icons/Facebook_logo.svg";
import Microsoft_logo from "../../assets/icons/Microsoft_logo.svg";
import Sony_logo from "../../assets/icons/Sony_logo.svg";
import CocaCola_logo from "../../assets/icons/CocaCola_logo.svg";

function Companies() {
  const logos = [
    { src: Disney_logo, alt: "Disney" },
    { src: Facebook_logo, alt: "Facebook" },
    { src: Microsoft_logo, alt: "Microsoft" },
    { src: Sony_logo, alt: "Sony" },
    { src: CocaCola_logo, alt: "CocaCola" },
  ];

  return (
    <div className={styles.companies_container}>
      <p className={styles.text}>Помогаем найти работу:</p>
      <div className={styles.companies_logos}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
