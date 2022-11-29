import styles from "../../styles/LoginAndRegisterHeader.module.css";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.headerAndParaContainer}>
          <div className={styles.headerLogoContainer}>
            <img
              src="/assets/JPG-01.png"
              alt="steady flights logo"
              className={styles.headerLogo}
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
          <img
            src="/assets/Ellipse 5.png"
            alt="profile picture"
            className={styles.headerPicture}
          />
        </div>
      </div>
    </div>
  );
};
