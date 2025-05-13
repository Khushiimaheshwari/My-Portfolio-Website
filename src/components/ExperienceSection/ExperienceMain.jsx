import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperiences from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto lg:px-20 sm:px-10 md:px-15 mb-30">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      {/* <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperiences /> */}
    </div>
  );
};

export default ExperienceMain;