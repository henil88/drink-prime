import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDrinks } from "../../context/DrinksContext";
import styles from "../../assets/styles/grid.module.scss";
import { Link } from "react-router-dom"; // or next/link if using Next.js

import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const Hydresion = ({ category, limit = null, showSeeAll = true }) => {
  const { getByCategory } = useDrinks();
  const cardRefs = useRef([]);

  const drinks = getByCategory(category);
  const displayDrinks = limit ? drinks.slice(0, limit) : drinks;

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [displayDrinks]);

  return (
    <>
      <div className={styles.grid}>
        {displayDrinks.map((drink, index) => (
          <div
            key={drink.id}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              opacity: 0,
              transform: "translateY(60px)",
              willChange: "opacity, transform",
            }}
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

      {/* Show "See All" only when limited */}
      {limit && showSeeAll && (
        <div className={styles.moreoption}>
          <Link
            to={`/products/${category.toLowerCase().replace(/\s+/g, "-")}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className={styles.btn_moreoption}>
              See All {category}
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Hydresion;
