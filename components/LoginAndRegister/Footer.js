import styles from "../../styles/LoginAndRegisterFooter.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="/assets/JPG-02.png" alt="steady flights logo" />
          <p>Flights you need, at prices you'll love.</p>
        </div>
        <div className={styles.footerRightContainer}>
          <div className={styles.footerLinksContainer}>
            <div className={styles.footerLinks}>
              <h1>Company</h1>
              <p>About us</p>
              <p>Career</p>
              <p>Blog</p>
              <p>Tickets</p>
              <p>Pricing</p>
              <p>Demo</p>
            </div>
            <div className={styles.footerLinks}>
              <h1>Support</h1>
              <p>Help Center</p>
              <p>Contact us</p>
              <p>Terms & Condition</p>
              <p>Sitemap</p>
              <p>Feedback</p>
            </div>
            <div className={styles.footerLinks}>
              <h1>Media</h1>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Youtube</p>
              <p>Instagram</p>
            </div>
          </div>
          <div className={styles.footerSubscribe}>
            <h1>Subscribe Us</h1>
            <input
              type="text"
              name="subscribe"
              id="subscribe"
              placeholder="Your email here..."
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
