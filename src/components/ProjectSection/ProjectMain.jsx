import { motion } from "framer-motion";
import { fadeIn } from "../../FramerMotion/varients";
import SingleProject from "./SingleProject";
import ProjectsText from "./ProjectsText";

const projects = [
  {
    name: "HealingNeuro",
    year: "May2024",
    align: "right",
    image: "Images/HealingNeuro.png",
    github_link: "https://github.com/Khushiimaheshwari/HealingNeuro--A-Depression-Monitoring-System",
    link_name: "Demo",
    link: "https://drive.google.com/drive/folders/1kOwLR07KjO3qswaVTdNuXEVv1hpmGV_n",
  },
  {
    name: "BlogNest",
    year: "Jan2025",
    align: "left",
    image: "Images/BlogNest.png",
    github_link: "https://github.com/Khushiimaheshwari/BlogNest",
    link_name: "Link",
    link: "https://blog-nest-flax.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto lg:px-20 sm:px-12 md:px-18 mb-30">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              github_link={project.github_link}
              link_name={project.link_name}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;