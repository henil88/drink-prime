import React from "react";
import Hydration from "../components/hydration/Hydration";
import RapidRehydration from "../components/rapid-hydration/RapidRehydration";
import PrimeIce from "../components/Prime-ice/PrimeIce";
import Energy from "../components/energy/Energy"

const Products = () => {
  return (
    <div>
      <Hydration />
      <RapidRehydration />
      <PrimeIce />
      <Energy/>
    </div>
  );
};

export default Products;
