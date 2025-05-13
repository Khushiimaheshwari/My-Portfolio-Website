import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-14 max-w-[1200px] mx-auto sm:hidden">
        <Link to="KM" smooth={true} spy={true} duration={500} offset={-130}>
          <p className="text-3xl text-lightGrey hover:text-lighterCyan transition-all duration-500 cursor-pointer hover:scale-105">
          Khushi Maheshwari</p>
        
        </Link>
        <ul className="flex gap-4 text-lightGrey text-xl ">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-orange transition-all duration-500 cursor-pointer hover:scale-115"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightOrange">
        © 2025 Khushi | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;