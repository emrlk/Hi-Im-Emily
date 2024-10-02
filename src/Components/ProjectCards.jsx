
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";
import { styles } from '../styles';

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 my-[-17%] w-[500%]`}
        style={{ marginLeft: "-20%" }}
      >
        <span className='hash-span ' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  };

  const ProjectCard = ({ index, name, description, tags, image, source_code_link, demo_link }) => {
    return (
      
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      >
        <Tilt
          options={{
            max: 40,
            scale: 1,
            speed: 450
          }}
          className='text-grayscale-50 p-5 rounded-lg sm:w-[360px] w-full'
          style={{ marginTop: '0%' }}
          >

          
          <div
            className="relative w-full h-[180px]"
            
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute inset-0 flex justify-end m-2 card-img_hover"
            >
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
              >
              <img
                src={githubIcon}
                alt="github"
                className="w-15 h-15 object-contain"
                />
              </div>
            </div>
          </div>
  
          {/*Project Title and Description Container*/ }
          <div className="mt-3">
            <h3
            style={{ fontFamily: "Nature", fontSize: 28, letterSpacing: 3}}
            className="text-white font-bold text-[20px]">{name}</h3>
            <p
            style={{ fontFamily: "Body", fontSize: 18, lineHeight: 1.25}}
            className="mt-2 text-secondary text-[14px] leading-[18px]">
            {description}
            </p>
          </div>
          <div
            className="mt-4 flex flex-wrap gap-0"
          >
          </div>

          
          <div
            className="mt-1 flex justify-center items-center"
          >
            <a
              className="shadow-md shadow-primary m-3 p-2  bg-primary-600 w-[60%] rounded-lg flex justify-center"
              href={demo_link}
              target='_blank'
            >
              Demo
            </a>
          </div>
        </Tilt>
      </motion.div>
    )
  }

const Works = () => {
  return (
    <>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");