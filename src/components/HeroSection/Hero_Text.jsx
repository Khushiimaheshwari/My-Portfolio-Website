import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left md:pl-6 sm:text-center sm:pt-2">
      <motion.h1
        variants={fadeIn("right", 1.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-3.5 md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Khushi  <br className="sm:hidden md:block" />
        Maheshwari
      </motion.h1>
      <motion.h2
        variants={fadeIn("down", 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lighterCyan"
      >
        <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-lightGrey flex sm:justify-center md:justify-start">
         <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-2 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center hover:scale-110">
          <a
            href="https://drive.google.com/drive/folders/1GJ9l5mwGpVQQgoaf_KpWa0hfOAIFjqax"
            target="_blank"
            className="cursor-pointer text-white hover:text-black transition-all duration-500"
          >
            Download Resume
          </a>
        </button>
      </motion.p>
    </div>
  );
};

export default HeroText;