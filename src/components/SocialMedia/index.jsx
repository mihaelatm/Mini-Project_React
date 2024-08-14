import styles from "./styles.module.css";
import Cooljob from "../../assets/icons/Cooljob_logo_footer.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Gmail from "../../assets/icons/gmail.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Facebook from "../../assets/icons/facebook_icon.svg";

function SocialMedia() {
  const socialMedia = [
    { icon: Linkedin },
    { icon: Gmail },
    { icon: Twitter },
    { icon: Facebook },
  ];

  return (
    <div className={styles.social__media_container}>
      <hr />
      <div className={styles.social__media_logos}>
        <img src={Cooljob} alt="cooljob_logo" className={styles.cooljob_logo} />
        <div className={styles.social__media}>
          {socialMedia.map((item, index) => (
            <img key={index} src={item.icon} alt="social_media" />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SocialMedia;
