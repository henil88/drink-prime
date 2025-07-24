import React from "react";
import ProductShowCase from "../ProductShowCase/ProductShowCase";
import TitleHeading from "../TitleHeading";
import "../../assets/styles/product-page.scss";

const PrimeIce = () => {
  return (
    <div>
      <TitleHeading text={"PRIME ICE"} fontSizeClass="custom-energy-title"/>
      <ProductShowCase category="PRIME ICE" limit={null} showSeeAll={false} />
    </div>
  );
};

export default PrimeIce;
