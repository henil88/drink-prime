import React from "react";
import ProductShowCase from "../ProductShowCase/ProductShowCase";
import TitleHeading from "../TitleHeading";
import "../../assets/styles/product-page.scss";

const Energy = () => {
  return (
    <div>
      <TitleHeading text={"ENERGY"} fontSizeClass="custom-energy-title" />
      <ProductShowCase category="Energy" limit={null} showSeeAll={false} />
    </div>
  );
};

export default Energy;
