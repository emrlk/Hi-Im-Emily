import { LazyMotion, domAnimation, m } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {skills.map((skill, index) => (
        <m.div
          initial={{ scale: 0.8 }}
          animate={{
            rotate: [0, 0, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
          key={index}
          className="card w-[300px] h-[300px] flex flex-col items-center  bg-primary-600 rounded-xl cursor-pointer"
        >
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col text-primary-200">
            <img
              className="h-[70px] flex justify-center items-center w-[70px]  bg-grayscale-25 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-3xl"
              style={{
                fontFamily: "Nature",
                fontWeight: "normal",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-600 text-primary-200 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {skill.description}
            </span>
          </div>
        </m.div>
      ))}
    </LazyMotion>
    </div>
  );
};

export default SkillsCards;

