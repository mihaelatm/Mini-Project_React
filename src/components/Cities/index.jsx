import styles from "./styles.module.css";

function Footer() {
  const cities = [
    { name: "Осака" },
    { name: "Коясан" },
    { name: "Токио" },
    { name: "Хаконэ " },
    { name: "Наэба" },
    { name: "Томаму" },
    { name: "Йокогама" },
    { name: "Нагоя" },
    { name: "Саппоро" },
    { name: "Кобе" },
  ];

  return (
    <section className={styles.footer_container}>
      <h2 className={styles.footer_title}>Популярные города</h2>
      <div className={styles.footer_city}>
        {cities.map((city, index) => (
          <div key={index} className={styles.city_name}>
            <span className={styles.city_name}>{city.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
