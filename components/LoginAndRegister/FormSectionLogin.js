import styles from "../../styles/LoginAndRegisterFormSection.module.css";

export const FormSectionLogin = () => {
  return (
    <div className={styles.formSectionWrapper}>
      <div className={styles.formSectionContainer}>
        <div className={styles.formSectionForm}>
          <h1>
            <span className={styles.formSectionContainerSpan1}>Login</span> and
            let's explore world!
          </h1>
          <p className={styles.formSectionFormTitlePara}>
            At prices you'll love.
          </p>
          <form>
            <div className={styles.formSectionFormInputContainerEmail}>
              <p>Email</p>
              <input type="text" name="Email" id="Email" />
            </div>
            <div className={styles.formSectionFormInputContainerPassword}>
              <div>
                <p>Password</p>
                <input type="text" name="Password" id="Password" />
              </div>
              <img src="/assets/eye 1.svg" alt="hide password" />
            </div>
          </form>
          <div className={styles.formSectionContainerSpan2}>Reset Password</div>
          <div className={styles.formSectionFormButtonsContainer}>
            <button className={styles.formSectionFormButtonLogin}>
              Login with Steady Flights
            </button>
            <button className={styles.formSectionFormButtonGoogle}>
              <img
                src="/assets/logo googleg 48dp.png"
                alt="google authorization"
              />
              Login with Google
            </button>
          </div>
          <p className={styles.formSectionFormRegister}>
            Don't have an account?{" "}
            <span className={styles.formSectionFormSpan3}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};
