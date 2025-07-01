import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
// import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NodeJS",
    icon: FaNode,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  { 
    skill: "Java",
    icon: FaJava,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
