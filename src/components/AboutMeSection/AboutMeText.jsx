import { Link } from "react-scroll";
import React, { useTransition, useState } from "react";
import TabButton from "./AboutTabBtn";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p className="font-medium">K.R. Mangalam University, Sohna Haryana</p>
          <p className="text-base mt-3 italic">B.Tech CSE AI and ML</p>
          <p className="text-base mt-2 italic">CGPA: 8.76</p>
          <p className="text-base mt-2 italic">July 2022 - July 2026</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>Winner Geekathon, a hackathon organized by Geekrooms.</li>
        <li> Top finalist at Hack5.0 (NIT Hamirpur), Hacknovate 5.0(ABESIT), HackKRMU, MindBenders(K.R. Mangalam)</li>
        <li>Dean’s List Honor, received for academic excellence</li>
      </ul>
    ),
  },
];

const AboutMeText = () => {

  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-lighterCyan mb-10">About Me</h2>
      <p className="text-white">
        I’m Khushi Maheshwari, a Developer with a detail-oriented approach and a strategic vision, experienced in leading teams and building
 dynamic web solutions through participation in hackathons and real-world projects. Committed to crafting
 scalable applications and continuously evolving as a developer through learning and innovation.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center hover:scale-110">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-black transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
       <div className="flex flex-col sm:flex-row sm:justify-start  gap-4 mt-14 text-lighterCyan text-xl sm:text-2xl">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <hr className="border-t-1 border-orange w-full mb-2" />
          <div className="mt-4 w-full text-start sm:px-5 md:px-0 text-base sm:text-lg text-white">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
    </div>
  );
};

export default AboutMeText;