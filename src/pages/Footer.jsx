import { Link } from "react-router-dom";
import styles from "../assets/styles/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <h2>ABOUT PRIME</h2>
            <p>
              PRIME was developed to fill the void where great taste meets
              function. With bold, thirst-quenching flavors to help you refresh,
              replenish, and refuel, PRIME is the perfect boost for any
              endeavor. We're confident you'll love it as much as we do.
            </p>
            <div className="social-icons"></div>
          </div>
          <div className={styles.footerCenter}>
            <div className={styles.footerCenter1}>
              <Link to={"/products/rapid-rehydration"} className={styles.link}>
                RAPID REHYDRATION
              </Link>
              <Link to={"/products/prime-ice"} className={styles.link}>
                ICE HYDRATION
              </Link>
              <Link to={"/products/hydration"} className={styles.link}>
                Hydration
              </Link>
              <Link to={"/products/energy"} className={styles.link}>
                Energy
              </Link>
            </div>
            <div className={styles.footerCenter2}>
              <Link to={"/privacy-policy"} className={styles.link}>
                Privacy Policy
              </Link>
              <Link to={"/return-policy"} className={styles.link}>
                Return Policy
              </Link>
              <Link to={"/contact-us"} className={styles.link}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className={styles.footerRight}>
            <h2>news letter</h2>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <input type="text" placeholder="Enter Email id" />
            <button className={styles.button_footer}>Subscribe</button>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerB_left}>
            <p>© Prime Hydration LLC</p>
          </div>
          <div className={styles.footerB_right}>
            <p>Cookie Choices</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Accessibility Statement</p>
            <p>Contact</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
