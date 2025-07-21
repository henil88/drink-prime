// src/components/CanRotator.jsx
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

/**
 * CanRotator handles a full 360° spin of the modelGroup and swaps texture at halfway.
 */
export default function CanRotator({
  modelGroupRef,
  isRotating,
  setIsRotating,
  pendingIndex,
  setIndex,
}) {
  const halfwayReached = useRef(false);
  const startY = useRef(null);
  const spinSpeed = 15.0; // radians/sec — faster 360° spin (~0.314s) // radians per second (~3.14s for full 2π)

  useFrame((_, delta) => {
    const group = modelGroupRef.current;
    if (!isRotating || !group) return;

    // Initialize on spin start
    if (startY.current === null) {
      startY.current = group.rotation.y;
      halfwayReached.current = false;
    }

    // Incremental rotation
    group.rotation.y += spinSpeed * delta;
    const elapsed = group.rotation.y - startY.current;

    // Texture swap at 180°
    if (!halfwayReached.current && elapsed >= Math.PI) {
      setIndex(pendingIndex);
      halfwayReached.current = true;
    }

    // Finish spin at 360°
    if (elapsed >= Math.PI * 2) {
      group.rotation.y = startY.current + Math.PI * 2;
      setIsRotating(false);
      startY.current = null;
    }
  });

  return null;
}
