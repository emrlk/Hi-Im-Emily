
import { LazyMotion, domAnimation, m } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="p-6 noselect"
      >
        <span
          className="opacity-75 text-primary-400"
          style={{
            fontFamily: "Signature",
            fontWeight: "200",
            fontSize: 60,
            letterSpacing: 4,
            fontColor: "white"
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-7xl sm:text-8xl md:text-9xl text-primary-200"
          style={{ fontFamily: "Nature", fontColor: "white" }}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
