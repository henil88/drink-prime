import { useRef } from "react";
import Hero from "../components/Hero";
import style from "./home.module.scss";
import TitleHeading from "../components/TitleHeading";
import Hydresion from "../components/hydresion/Hydresion";

const Home = () => {
  const homeRef = useRef(null); // Create a ref for the .home div

  return (
    <div ref={homeRef} className={style.home}>
      <Hero homeRef={homeRef} /> {/* Pass the ref to Hero */}
      <TitleHeading text="HYDRATION" />
      <Hydresion category="Hydration" limit={6} />
      {/* <TitleHeading text="RAPID" />
      <TitleHeading text="REHYDRATION" /> */}

      <TitleHeading text={"RAPID\nREHYDRATION"} />
      <Hydresion category="RAPID REHYDRATION" limit={3} />
      <TitleHeading text="PRIME ICE" />
      <Hydresion category="PRIME ICE" limit={3} />
      <TitleHeading text="ENERGY" />
      <Hydresion category="Energy" limit={3} />
    </div>
  );
};

export default Home;
