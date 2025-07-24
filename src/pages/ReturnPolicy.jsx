import React from "react";
import styles from "../assets/styles/ReturnPolicy.module.scss";
import Footer from "./Footer";

const ReturnPolicy = () => {
  return (
    <>
      <div className={styles.policyContainer}>
        <h1 className={styles.title}>Return Policy</h1>
        <p>
          All PRIME purchases (drinks, powder, and merchandise) made directly on
          our website are <strong>final sale</strong> and we are unable to
          accept returns or refunds on our products.
        </p>
        <p>
          To return a purchase made from a retail location, we recommend
          reaching out directly to the retailer for assistance.
        </p>
        <p>
          If you have additional questions, please reach out to our Customer
          Service Team at{" "}
          <a href="mailto:contact@drinkprime.com" className={styles.link}>
            contact@drinkprime.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
