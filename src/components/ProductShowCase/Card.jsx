import TiltedCard from "../../react-bits-effects/TiltedCard/TiltedCard";
import styles from "../../assets/styles/card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, altText, captionText, title, id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <TiltedCard
          imageSrc={imageSrc}
          altText={altText}
          loading="lazy"
          captionText={captionText}
          containerHeight="350px"
          containerWidth="350px"
          imageHeight="350px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
      <div className={styles.bottom}>
        <p>{title}</p>
        <Link
          to={`/product-detail/${id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className={styles.btn_learnMore}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
