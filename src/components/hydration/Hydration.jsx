import React from "react";
import ProductShowCase from "../ProductShowCase/ProductShowCase";
import TitleHeading from "../TitleHeading";
import "../../assets/styles/product-page.scss";

const Hydration = () => {
  return (
    <div>
      <TitleHeading text="HYDRATION" fontSizeClass="custom-energy-title" />
      <ProductShowCase category="Hydration" limit={null} showSeeAll={false} />
    </div>
  );
};

export default Hydration;
