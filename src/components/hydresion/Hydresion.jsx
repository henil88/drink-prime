import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import drinks from "../../data/drinks";
import styles from "../../assets/styles/grid.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Hydresion = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 10%", // 👈 controls when reverse triggers
            toggleActions: "play reverse play reverse", // 👈 scroll up/down toggles
            // markers: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.grid}>
      {drinks.map((drink, index) => (
        <div
          key={drink.id}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            opacity: 0,
            transform: "translateY(60px)",
            willChange: "opacity, transform",
          }} // Optional initial state
        >
          <Card
            imageSrc={drink.image}
            altText={drink.alt}
            captionText={drink.title}
            title={drink.title}
            buyLink={drink.buyLink}
          />
        </div>
      ))}
    </div>
  );
};

export default Hydresion;
