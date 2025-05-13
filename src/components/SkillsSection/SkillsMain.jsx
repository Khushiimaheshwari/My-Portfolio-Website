import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkills_SmallScreen";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] mx-auto min-h-[520px]  relative lg:px-20 sm:px-6 md:px-10 overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;