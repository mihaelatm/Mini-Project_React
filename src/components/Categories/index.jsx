import styles from "./styles.module.css";
import Finance from "../../assets/icons/Finance.svg";
import Cargo_transportation from "../../assets/icons/Cargo_transportation.svg";
import Design from "../../assets/icons/Design.svg";
import Restaurant_business from "../../assets/icons/Restaurant_business.svg";
import Medicine from "../../assets/icons/Medicine.svg";
import Multimedia from "../../assets/icons/Multimedia.svg";
import Helpdesk from "../../assets/icons/Helpdesk.svg";
import Management from "../../assets/icons/Management.svg";
import Sales from "../../assets/icons/Sales.svg";
import More_categories from "../../assets/icons/More_categories.svg";

function Categories() {
  const categories = [
    { name: "Финансы", icon: Finance },
    { name: "Грузоперевозки", icon: Cargo_transportation },
    { name: "Дизайн", icon: Design },
    { name: "Ресторанный бизнес", icon: Restaurant_business },
    { name: "Медицина", icon: Medicine },
    { name: "Мультимедиа", icon: Multimedia },
    { name: "Служба поддержки", icon: Helpdesk },
    { name: "Менеджмент", icon: Management },
    { name: "Продажи", icon: Sales },
    { name: "Больше категорий", icon: More_categories },
  ];

  return (
    <section className={`$styles.container} ${styles.categories_section}`}>
      <h2 className={styles.categories_title}>Работа по категориям</h2>
      <div className={styles.categories_container}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categories_card}>
            <img
              src={category.icon}
              alt={category.name}
              className={styles.categories_icon}
            />
            <span className={styles.categories_name}>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Categories;
