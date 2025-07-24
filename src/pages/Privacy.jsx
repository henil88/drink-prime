import React from "react";
import styles from "../assets/styles/Privacy.module.scss";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <>
      <div className={styles.privacyContainer}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: May 30th, 2025</p>

        <p>
          If you are in the UK or the European Economic Area (EEA) you should
          view our Privacy Policy at{" "}
          <a
            href="https://drinkprime.uk/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            https://drinkprime.uk/policies/privacy-policy
          </a>
          .
        </p>

        {/* Example section */}
        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            PRIME respects your privacy, and we developed this Privacy Policy to
            show you how we collect, use, communicate, disclose, and make use of
            your personal information...
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Children Under the Age of 16</h2>
          <p>
            Our Site is not intended for children under 16 years of age. No one
            under age 16 may provide any information to or on the Site...
          </p>
        </section>

        {/* Continue with sections 3–11 using same format */}
        <section className={styles.section}>
          <h2>3. Information We Collect</h2>
          <p>
            We collect several types of information from and about users of our
            PRIME, including information by which you may be personally
            identified...
          </p>
        </section>

        {/* Repeat as needed for all remaining sections (4–11) */}

        <section className={styles.section}>
          <h2>11. Changes to Our Privacy Policy</h2>
          <p>
            It is our policy to post any changes we make to our privacy policy
            on this page with a notice that the privacy policy has been updated
            on the Site home page...
          </p>
          <p>
            For questions, comments or assistance, please contact us at{" "}
            <a href="mailto:contact@drinkprime.com" className={styles.link}>
              contact@drinkprime.com
            </a>
            .
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
