import Lenis from "lenis";

export const createLenis = (onScrollCallback) => {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
  });

  if (onScrollCallback) {
    lenis.on("scroll", onScrollCallback);
  }

  return lenis;
};
