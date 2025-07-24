import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Hydration from "../components/hydration/Hydration";
import RapidRehydration from "../components/rapid-hydration/RapidRehydration";
import PrimeIce from "../components/Prime-ice/PrimeIce";
import Energy from "../components/energy/Energy";
import NotFound from "../pages/NotFound";
import Privacy from "../pages/Privacy";
import ReturnPolicy from "../pages/ReturnPolicy";
import ContactForm from "../pages/ContactForm";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/return-policy" element={<ReturnPolicy />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/products" element={<Products />} />
      <Route path="/shop" element={<Products />} />
        <Route path="/contact-us" element={<ContactForm />} />
      <Route path="/products/hydration" element={<Hydration />} />
      <Route
        path="/products/rapid-rehydration"
        element={<RapidRehydration />}
      />
      <Route path="/products/prime-ice" element={<PrimeIce />} />
      <Route path="/products/energy" element={<Energy />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Mainroutes;
