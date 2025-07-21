import { useRef } from "react";
import Hero from "../components/Hero";
import style from "./home.module.scss";

const Home = () => {
  const homeRef = useRef(null); // Create a ref for the .home div

  return (
    <div ref={homeRef} className={style.home}>
      <Hero homeRef={homeRef} /> {/* Pass the ref to Hero */}
    </div>
  );
};

export default Home;