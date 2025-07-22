import { useRef } from "react";
import Hero from "../components/Hero";
import style from "./home.module.scss";
import TitleHeading from "../components/TitleHeading";
import Card from "../components/hydresion/Card";
import Hydresion from "../components/hydresion/Hydresion";

const Home = () => {
  const homeRef = useRef(null); // Create a ref for the .home div

  return (
    <div ref={homeRef} className={style.home}>
      <Hero homeRef={homeRef} /> {/* Pass the ref to Hero */}
      <TitleHeading text={"HYDRATION"} />
      <Hydresion />
    </div>
  );
};

export default Home;
