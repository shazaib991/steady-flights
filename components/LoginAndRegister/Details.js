import styles from "../../styles/LoginAndRegisterDetails.module.css";
import Image from "next/image";

export const Details = () => {
  return (
    <div className={styles.DetailsWrapper}>
      <div className={styles.DetailsContainer}>
        <h1>Login to your account and get the most out of your travels!</h1>
        <p>Traveling made easy.</p>
        <div className={styles.DetailsCardsContainer}>
          <div className={styles.DetailsCard}>
            <Image
              src="/assets/Layer 1.svg"
              alt="Statistics chart"
              width={471}
              height={230}
            />
            <h1>Travel Features</h1>
            <p className={styles.DetailsCardPara1}>
              Steady Alerts, Steady Rewards, and much more! Access depends on
              your package.
            </p>
          </div>
          <div className={styles.DetailsCard}>
            <Image
              src="/assets/Layer 2.svg"
              alt="Statistics chart"
              width={306}
              height={230}
            />
            <h1>Excellent Deals</h1>
            <p className={styles.DetailsCardPara2}>
              Searching for the best deals has never been easier than it is now
              with Steady Flights.
            </p>
          </div>
          <div className={styles.DetailsCard}>
            <Image
              src="/assets/Layer 3.svg"
              alt="Statistics chart"
              width={370}
              height={230}
            />
            <h1>Traveler Profile</h1>
            <p className={styles.DetailsCardPara3}>
              Fill out your Traveler Profile and get access to Auto-Buy,
              personal deals & more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
