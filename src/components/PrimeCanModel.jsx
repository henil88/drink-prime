import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const PrimeCanModel = ({ texture, modelRef }) => {
  const { scene } = useGLTF("/model/prime_can_3.glb");

  // Clone the scene once
  const clonedScene = useMemo(() => clone(scene), [scene]);

  // Apply texture to all mesh materials
  useEffect(() => {
    if (!clonedScene || !texture) return;

    texture.flipY = false;

    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();
        child.material.map = texture;
        child.material.needsUpdate = true;
        child.material.side = 2; // Double-sided
      }
    });

    if (modelRef) {
      modelRef.current = clonedScene;
    }
  }, [clonedScene, texture, modelRef]);

  return <primitive object={clonedScene} scale={10} position={[0, -1, 0]} />;
};

export default PrimeCanModel;
