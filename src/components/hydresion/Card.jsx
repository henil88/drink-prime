import TiltedCard from "../../react-bits-effects/TiltedCard/TiltedCard";
import styles from "../../assets/styles/card.module.scss";

const Card = ({ imageSrc, altText, captionText, title }) => {
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
        <button className={styles.btn_learnMore}>learn more</button>
      </div>
    </div>
  );
};

export default Card;
