import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white sm:text-sm md:text-md lg:text-lg">
      <SingleInfo text="khushimaheshwari35official@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 83830 19384" Image={FiPhone} />
      <SingleInfo text="Gurugram, Haryana" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
