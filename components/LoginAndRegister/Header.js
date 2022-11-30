import styles from "../../styles/LoginAndRegisterHeader.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerAndParaContainer}>
          <div className={styles.headerLogoContainer}>
            <Image
              src="/assets/JPG-01.png"
              alt="steady flights logo"
              className={styles.headerLogo}
              width={187}
              height={62}
            />
          </div>
          <div className={styles.headerPara}>
            <p>Fly Away</p>
            <p>Steady Alerts</p>
            <p>Steady Rewards</p>
          </div>
        </div>
        <div className={styles.headerContactContainer}>
          <button className={styles.headerContactButton}>Contact</button>
          <Image
            src="/assets/Ellipse 5.png"
            alt="profile picture"
            width={44}
            height={44}
            className={styles.headerPicture}
          />
        </div>
      </div>
    </div>
  );
};
