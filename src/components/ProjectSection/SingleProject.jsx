import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";

const SingleProject = ({ name, year, align, image, github_link, link_name, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="md:text-3xl sm:text-2xl text-orange sm:text-center md:text-end">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <div className="flex gap-3">
          <a
            href={github_link}
            target="_blank"
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            Github <BsFillArrowUpRightCircleFill />
          </a>
          <a
            href={link}
            target="_blank"
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            {link_name} <BsFillArrowUpRightCircleFill />
          </a>
        </div>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;