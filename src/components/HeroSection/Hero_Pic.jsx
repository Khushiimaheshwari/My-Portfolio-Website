import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import { PiHexagonThin } from "react-icons/pi";

const Hero_Pic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="/Images/Portfolio_Pic.png"
        alt="Khushi Maheshwari"
        className="lg:max-h-[450px] sm:max-h-[350px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse overflow-hidden">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] lg:min-h-[550px] sm:min-h-[400px] w-auto text-cyan blur-md animate-[spin_10s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default Hero_Pic;