import React from 'react';
import styles from '../assets/styles/About.module.scss';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <h1 className={styles.title}>About PRIME</h1>
      <p>
        We created PRIME to showcase what happens when rivals come together as brothers and business partners to fill the void where great taste meets function.
      </p>
      <p>
        We dropped our first product, PRIME Hydration in 2022 and since then, we've continued to work countless hours to expand in retailers, reach new markets and formulate new products we know you'll love.
      </p>
      <p>
        We’ve been humbled by the process of creating a real brand & surpassing some of the biggest beverage companies in the world. As underdogs, we always cherish the opportunity to show the world what’s possible.
      </p>
      <p>
        Now that we’re both fighting for the same team, we truly believe the sky is the limit.
      </p>
      <p className={styles.signature}>– KSI & Logan Paul</p>
    </section>
  );
};

export default About;
