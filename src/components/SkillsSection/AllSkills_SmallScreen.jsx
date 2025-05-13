import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";

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
    skill: "NextJS",
    icon: SiNextdotjs,
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
];

const AllSkillsSM = () => {
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              key={index}
              className="flex flex-col items-center"
            >
              <item.icon className="text-7xl text-orange" />
              <p className="text-center text-white mt-4">{item.skill}</p>
            </motion.div>
          );
        })}
      </div>
    )
  }
  
  export default AllSkillsSM;