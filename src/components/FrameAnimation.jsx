import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../assets/styles/FrameAnimation.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function FrameAnimation() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const frames = useRef({ currentIndex: 0, maxIndex: 2532 });
  const loadedIndices = useRef(new Set());
  const [isReady, setIsReady] = useState(false);
  const [canvasActive, setCanvasActive] = useState(false);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    const preloadCount = 60;
    const totalCount = frames.current.maxIndex;

    const preloadFrame = (i) => {
      const img = new Image();
      img.src = `/assets/Frames/frame_${i.toString().padStart(4, "0")}.jpeg`;

      img.onload = () => {
        imagesRef.current[i] = img;
        loadedIndices.current.add(i);
        if (i === 1) {
          loadImage(1);
          setIsReady(true);
        }
      };

      img.onerror = () => console.warn("Failed to load image:", img.src);
    };

    for (let i = 1; i <= preloadCount; i++) preloadFrame(i);
    setTimeout(() => {
      for (let i = preloadCount + 1; i <= totalCount; i++) preloadFrame(i);
    }, 500);
  }, []);

  const loadImage = (index) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = imagesRef.current[index];

    if (!img || !canvas || !context || !loadedIndices.current.has(index)) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(dpr, dpr);

    const scale = Math.max(width / img.width, height / img.height);
    const newWidth = img.width * scale;
    const newHeight = img.height * scale;
    const offsetX = (width - newWidth) / 2;
    const offsetY = (height - newHeight) / 2;

    context.clearRect(0, 0, width, height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    frames.current.currentIndex = index;
  };

  const startAnimations = () => {
    const scrollObj = { progress: 0 };

    gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=3000%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onEnter: () => setTimeout(() => setCanvasActive(true), 400),
        onLeave: () => setCanvasActive(true),
        onEnterBack: () => setCanvasActive(false),
        onLeaveBack: () => setCanvasActive(false),
      },
    })
      .to(`.${styles.topHalf}`, {
        yPercent: -100,
        ease: "power1.out",
        duration: 0.2,
      })
      .to(
        `.${styles.bottomHalf}`,
        {
          yPercent: 100,
          ease: "power1.out",
          duration: 0.2,
        },
        "<"
      )
      .to(scrollObj, {
        progress: 1,
        ease: "none",
        onUpdate: () => {
          const frame = Math.floor(
            gsap.utils.interpolate(1, frames.current.maxIndex, scrollObj.progress)
          );
          if (loadedIndices.current.has(frame)) loadImage(frame);
        },
      });
  };

  useLayoutEffect(() => {
    if (isReady) startAnimations();
  }, [isReady]);

  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.wrapper}>
        <div className={styles.split}>
          <div className={styles.topHalf}>
            <h1 className={styles.splitText}>REFUEL</h1>
          </div>

          <div className={styles.canvasWrapper}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div
              className={styles.middleText}
              style={{
                opacity: canvasActive ? 0 : 1,
                visibility: isReady ? "visible" : "hidden",
              }}
            >
              FUEL YOUR DRIVE
            </div>
          </div>

          <div className={styles.bottomHalf}>
            <h1 className={styles.splitText}>PRIME</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
