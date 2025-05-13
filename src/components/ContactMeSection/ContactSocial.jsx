import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4 sm:scale-80 md:scale-90 lg-scale-100">
      <SingleContactSocial link="https://www.linkedin.com/in/khushimaheshwari04" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Khushiimaheshwari" Icon={FiGithub} />
      <SingleContactSocial link="https://leetcode.com/u/Khushi_Maheshwari04/" Icon={SiLeetcode} />
    </div>
  );
};

export default ContactSocial;
