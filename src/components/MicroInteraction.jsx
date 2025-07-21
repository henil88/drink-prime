import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export const MicroInteraction = ({ modelRef }) => {
  const { size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const baseY = useRef(null);

  useEffect(() => {
    const onPointerMove = (e) => {
      mouse.current.x = (e.clientX / size.width) * 2 - 1;
      mouse.current.y = e.clientY / size.height; // screen space
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [size]);

  useFrame((_, delta) => {
    if (!modelRef.current) return;

    timeRef.current += delta;

    if (baseY.current === null) {
      baseY.current = modelRef.current.position.y;
    }

    const x = mouse.current.x; // range [-1, 1]
    const screenY = mouse.current.y; // range [0, 1]
    const normalizedY = (screenY - 0.5) * 2; // range [-1, 1]

    // 🟣 Bounce + Down Pressure
    const bounceBase = Math.sin(timeRef.current * 2) * 0.03;
    const pressure = normalizedY * 0.04; // mouse down → more press
    modelRef.current.position.y = baseY.current + bounceBase - pressure;

    // 🟢 Rotation
    const targetRotX = normalizedY * 0.1;

    // Only tilt diagonally (Z) when mouse is far from center
    const tiltStrength = Math.abs(x) > 0.15 ? (x * 0.1) : 0; // <- disables Z tilt near center
    const targetRotZ = tiltStrength;

    const targetRotY = x * 0.3;

    // 🟡 Clamp rotations for micro effect
    const clampedX = THREE.MathUtils.clamp(targetRotX, -0.15, 0.15);
    const clampedY = THREE.MathUtils.clamp(targetRotY, -0.3, 0.3);
    const clampedZ = THREE.MathUtils.clamp(targetRotZ, -0.1, 0.1);

    // 🔵 Animate with springy easing
    gsap.to(modelRef.current.rotation, {
      x: clampedX,
      y: clampedY,
      z: clampedZ,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  return null;
};
