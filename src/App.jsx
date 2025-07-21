import Navbar from "./components/Navbar";
import Mainroutes from "./Router/Mainroutes";
import styles from "./app.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createLenis } from "./hooks/lenis";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = createLenis(ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <main className={styles.main_tag}>
        <Navbar />
        <Mainroutes />
      </main>
    </>
  );
};

export default App;
