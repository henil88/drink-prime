import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDrinks } from "../context/DrinksContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/styles/productDetailsspecific.scss";
import Footer from "./Footer";

// Category features and badge image links
const categoryData = {
  "prime ice": {
    features: [
      "Smooth + Refreshing",
      "Zero Added Sugar",
      "20 Calories",
      "10% Coconut Water",
      "B Vitamins + Antioxidants",
      "Electrolytes",
      "Caffeine-Free",
    ],
    badges: [
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-1-Coconut_76.png?v=1704748198",
        label: "10% Coconut Water",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-2-Caffeine_73.png?v=1704748198",
        label: "Caffeine-Free",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/700mg_Electrolytes_V2.svg?v=1735831266",
        label: "Electrolytes",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/B_Vitamins_40659a63-7e1a-49c3-ad3b-45f1b8136926.png?v=1700237910",
        label: "B Vitamins",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-5-Antioxidants_6.png?v=1704748198",
        label: "Antioxidants",
      },
    ],
  },
  "rapid rehydration": {
    features: [
      "1,085mg Electrolytes",
      "Zero Sugar",
      "10 Calories",
      "Caffeine-Free",
    ],
    badges: [
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME_Rapid_Rehydration_Callout_A_v3.png?v=1747844504",
        label: "1,085mg Electrolytes",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME_Rapid_Rehydration_Callout_B_v2.png?v=1747844354",
        label: "Zero Sugar",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME_Rapid_Rehydration_Callout_C_v2.png?v=1747844355",
        label: "Caffeine-Free",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME_Rapid_Rehydration_Callout_D_v4.png?v=1747844713",
        label: "10 Calories",
      },
    ],
  },
  energy: {
    features: [
      "Zero Sugar",
      "200mg Caffeine",
      "355mg Electrolytes",
      "Vegan",
      "For Ages 18+",
      "New 16oz Size",
    ],
    badges: [
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME-EN-Caffeine-Callout.png?v=1672781752",
        label: "200mg Caffeine",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME-EN-Sugar-Callout.png?v=1672781769",
        label: "Zero Sugar",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/355MG-Electrolytes.png?v=1696264156",
        label: "355mg Electrolytes",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PRIME-EN-Vegan-Callout.png?v=1672781790",
        label: "Vegan",
      },
    ],
  },
  hydration: {
    features: [
      "Zero Added Sugar",
      "10% Coconut Water​",
      "15 Calories",
      "BCAAs + B Vitamins",
      "Antioxidants + Electrolytes",
      "Caffeine-Free",
    ],
    badges: [
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-1-Coconut_76.png?v=1704748198",
        label: "10% Coconut Water",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-2-Caffeine_73.png?v=1704748198",
        label: "Caffeine-Free",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-3-Electrolytes_61.png?v=1704748198",
        label: "Electrolytes",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/B_Vitamins_40659a63-7e1a-49c3-ad3b-45f1b8136926.png?v=1700237910",
        label: "B Vitamins",
      },
      {
        icon: "https://drinkprime.com/cdn/shop/files/PR-icon-5-Antioxidants_6.png?v=1704748198",
        label: "Antioxidants",
      },
    ],
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const { getById, sampleDrinks } = useDrinks();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const product = getById(Number(id));
  if (!product)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "Center",
          fontSize: "2rem",
          height: "90vh",
        }}
      >
        Product Out Of Stock
      </div>
    );

  const { imageViews, title, description, buyLink } = product;

  let category = "";
  for (const cat in sampleDrinks) {
    if (sampleDrinks[cat].some((item) => item.id === product.id)) {
      category = cat.toLowerCase();
      break;
    }
  }

  const features = categoryData[category]?.features || [];
  const badges = categoryData[category]?.badges || [];

  return (
    <>
      <div className="product-detail-page">
        {/* Swiper Image Slider */}
        {imageViews && (
          <div className="img-slider">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              speed={700}
              spaceBetween={20}
              slidesPerView={1}
            >
              {imageViews.img1 && (
                <SwiperSlide>
                  <img src={imageViews.img1} alt={`${title} - 1`} />
                </SwiperSlide>
              )}
              {imageViews.img2 && (
                <SwiperSlide>
                  <img src={imageViews.img2} alt={`${title} - 2`} />
                </SwiperSlide>
              )}
              {imageViews.img3 && (
                <SwiperSlide>
                  <img src={imageViews.img3} alt={`${title} - 3`} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        )}

        {/* Product Info */}
        <div className="details">
          <div className="top">
            <h1>{title}</h1>
          </div>

          <div className="center">
            {features.length > 0 ? (
              <ul>
                {features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            ) : (
              <p>{description || "No description available."}</p>
            )}
          </div>

          <div className="bottom">
            {buyLink && (
              <a href={buyLink} target="_blank" rel="noopener noreferrer">
                Buy Now
              </a>
            )}

            {badges.length > 0 && (
              <div className="badges">
                {badges.map((badge, idx) => (
                  <div className="badge" key={idx}>
                    <img src={badge.icon} alt={badge.label} />
                    {/* <span>{badge.label}</span> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
