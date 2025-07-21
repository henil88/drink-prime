import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import PrimeCanModel from "../components/PrimeCanModel";
import { MicroInteraction } from "./MicroInteraction";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import styles from "./hero_text.module.scss";
import { TextureLoader } from "three";
import { getLenis } from "../hooks/lenisInstance";

// Texture paths and metadata
const texturePaths = [
  "/model/textures/Material.001_baseColor.png",
  "/model/textures/Material.002_baseColor.png",
  "/model/textures/Material.003_baseColor.png",
  "/model/textures/Material.004_baseColor.png",
  "/model/textures/Material.005_baseColor.png",
];

const texts = [
  "STRAWBERRY WATERMELON",
  "BLUE RASPBERRY",
  "TROPICAL PUNCH",
  "ORANGE MANGO",
  "LEMON LIME",
];

const bgColors = ["#A05D78", "#3A6F75", "#7C6423", "#804C3A", "#6B8F6B"];

// Ensure can stays centered
const CanPositioner = ({ groupRef }) => {
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = 0;
      groupRef.current.position.y = 0;
    }
  });
  return null;
};

export default function Hero({ homeRef }) {
  const groupRef = useRef();
  const modelRef = useRef();
  const textRef = useRef();
  const canvasContainerRef = useRef();
  const [index, setIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false); // Track model loading

  // Load textures
  const loadedTextures = useLoader(TextureLoader, texturePaths);

  // Ensure textures are GPU-ready
  useEffect(() => {
    loadedTextures.forEach((texture) => {
      texture.encoding = THREE.sRGBEncoding;
      texture.anisotropy = 4;
    });
  }, [loadedTextures]);

  // Animation for overlay text
  const animateOverlay = (dir = "right") => {
    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: dir === "right" ? 100 : -100 },
      { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );
  };

  const spinDuration = 0.5;

  const nextTexture = () => {
    if (isRotating) return;
    setIsRotating(true);
    const next = (index + 1) % texturePaths.length;
    const tl = gsap.timeline({
      onComplete: () => setIsRotating(false),
    });
    tl.to(
      groupRef.current.rotation,
      {
        y: groupRef.current.rotation.y + Math.PI * 2, // Horizontal rotation
        duration: spinDuration,
        ease: "power2.inOut",
      },
      0
    );
    tl.call(() => setIndex(next), null, spinDuration * 0.5);
    animateOverlay("right");
  };

  const prevTexture = () => {
    if (isRotating) return;
    setIsRotating(true);
    const prev = (index - 1 + texturePaths.length) % texturePaths.length;
    const tl = gsap.timeline({
      onComplete: () => setIsRotating(false),
    });
    tl.to(
      groupRef.current.rotation,
      {
        y: groupRef.current.rotation.y - Math.PI * 2, // Horizontal rotation
        duration: spinDuration,
        ease: "power2.inOut",
      },
      0
    );
    tl.call(() => setIndex(prev), null, spinDuration * 0.5);
    animateOverlay("left");
  };

  // Set model loaded state when groupRef is ready
  useEffect(() => {
    const checkModelLoaded = () => {
      if (groupRef.current) {
        setIsModelLoaded(true);
      } else {
        // Poll until groupRef is ready
        const interval = setInterval(() => {
          if (groupRef.current) {
            setIsModelLoaded(true);
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
    };
    checkModelLoaded();
  }, []);

  // GSAP ScrollTrigger for pinning and vertical rotation
  useEffect(() => {
    if (!homeRef.current || !isModelLoaded) return; // Wait for refs

    gsap.registerPlugin(ScrollTrigger);

    // Pinning
    ScrollTrigger.create({
      trigger: canvasContainerRef.current,
      start: "top top",
      end: `+=${homeRef.current.offsetHeight - window.innerHeight}`,
      pin: true,
      pinSpacing: false,
      scroller: getLenis() ? document.documentElement : null,
    });

    // Scroll-driven vertical rotation
    gsap.to(groupRef.current.rotation, {
      x: Math.PI * 2, // One full rotation forward when scrolling down
      ease: "none",
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top top",
        end: `+=${homeRef.current.offsetHeight - window.innerHeight}`,
        scrub: 1, // Smooth rotation with scroll
        scroller: getLenis() ? document.documentElement : null,
        invalidateOnRefresh: true,
      },
      
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [homeRef, isModelLoaded]);

  useEffect(() => {
    animateOverlay();
  }, []);


  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: bgColors[index],
        transition: "background-color 0.8s ease",
        zIndex: 10,
      }}
    >
      <div
        ref={canvasContainerRef}
        style={{
          width: "100%",
          height: "100vh",
          zIndex: 10,
          outline: "2px solid",
        }}
      >
        <Canvas
          className={styles.canva_positions}
          camera={{ position: [0, 1, 5], fov: 45 }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <directionalLight position={[-5, -5, -5]} intensity={1} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <CanPositioner groupRef={groupRef} />
            <group ref={groupRef}>
              <PrimeCanModel
                texture={loadedTextures[index]}
                modelRef={modelRef}
              />
            </group>
          </Suspense>
          <MicroInteraction modelRef={modelRef} isRotating={isRotating} />
        </Canvas>
      </div>
      {/* Overlay Text */}
      <div
        ref={textRef}
        className={clsx(
          styles.overlay_text,
          texts[index] === "STRAWBERRY WATERMELON" && styles.smallText
        )}
      >
        {texts[index]}
      </div>
      {/* Prev/Next Buttons */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 11,
          display: "flex",
          gap: 20,
        }}
      >
        <button onClick={prevTexture}>⬅ Prev Can</button>
        <button onClick={nextTexture}>Next Can ➡</button>
      </div>
    </div>
  );
}
