import ScrollFloat from "../react-bits-effects/ScrollFloat/ScrollFloat";

const TitleHeading = ({ text }) => (
  <ScrollFloat
    animationDuration={1}
    ease="back.inOut(2)"
    scrollStart="center bottom+=50%"
    scrollEnd="bottom bottom-=40%"
    stagger={0.03}
  >
    {text}
  </ScrollFloat>
);

export default TitleHeading;
