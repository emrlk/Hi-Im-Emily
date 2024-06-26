
import Marquee from "react-fast-marquee";

const MarqueeCards = ({children, direction}) => {

  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={60}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
