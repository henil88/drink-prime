import React from "react";
import ProductShowCase from "../ProductShowCase/ProductShowCase";
import TitleHeading from "../TitleHeading";
import "../../assets/styles/product-page.scss";

const RapidRehydration = () => {
  return (
    <div>
      <TitleHeading text={"RAPID\nREHYDRATION"} fontSizeClass="custom-energy-title"/>
      <ProductShowCase
        category="RAPID REHYDRATION"
        limit={null}
        showSeeAll={false}
      />
    </div>
  );
};

export default RapidRehydration;
