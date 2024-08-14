import styles from "./styles.module.css";
import location_icon from "../../assets/icons/location.svg";
import Sony from "../../assets/icons/Sony.svg";
import facebook from "../../assets/icons/facebook.svg";
import Cola from "../../assets/icons/Cola.svg";

function JobList() {
  const jobs = [
    {
      category: "Финансы",
      color: "#5182FF",
      name: "Менеджер по управлению финансами в крупной компании",
      icon: location_icon,
      location: "Осака, Япония",
      img: Sony,
      time: "Sony, 3 дня назад",
    },
    {
      category: "Продажи",
      color: "#FF51EE",
      name: "Специалист по продажам",
      icon: location_icon,
      location: "Коясан, Япония",
      img: facebook,
      time: "Facebook, 7 дней назад",
    },
    {
      category: "Служба поддержки",
      color: "#58D94D",
      name: "Оператор колл центра",
      icon: location_icon,
      location: "Томаму, Япония",
      img: Cola,
      time: "CocaCola, 1 день назад",
    },
    {
      category: "Мультимедиа",
      color: "#FF9051",
      name: "Системный администратор",
      icon: location_icon,
      location: "Токио, Япония",
      img: Sony,
      time: "Sony, 3 дня назад",
    },
    {
      category: "Дизайн",
      color: "#F84242",
      name: "Дизайнер интерьера в профессиональную студию в центре города",
      icon: location_icon,
      location: "Йокогама, Япония",
      img: facebook,
      time: "Facebook, 7 дней назад",
    },
    {
      category: "Грузоперевозки",
      color: "#383838",
      name: "Водитель на дальние дистанции",
      icon: location_icon,
      location: "Кобе. Япония",
      img: Cola,
      time: "CocaCola, 1 день назад",
    },
  ];

  return (
    <div className={styles.job__list_container}>
      <h2 className={styles.job__list_title}>Новые вакансии</h2>
      <p className={styles.job__list_text}>
        Найди работу своей мечты прямо сейчас
      </p>
      <div className={styles.jobs__list_cards}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.jobs_cards}>
            <div className={styles.job_category}>
              <span
                className={styles.category_circle}
                style={{ backgroundColor: job.color }}
              ></span>
              {job.category}
            </div>
            <h2 className={styles.job_name}>{job.name}</h2>
            <div className={styles.jobLocation}>
              <img
                src={job.icon}
                alt="location icon"
                className={styles.location_icon}
              />
              <span>{job.location}</span>
            </div>
            <div className={styles.job__time}>
              <img
                src={job.img}
                alt="company logo"
                className={styles.company_logo}
              />
              <span>{job.time}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.button}>Все вакансии</button>
    </div>
  );
}

export default JobList;
