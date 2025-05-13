import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col sm:gap-[-10] md:gap-20 lg:gap-30 lg:px-20 sm:px-6 md:px-10 max-w-[1200px] mx-auto mt-30 justify-between items-center mb-10"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeImage 
        />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;