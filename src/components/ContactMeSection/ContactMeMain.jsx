import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[60px] lg:px-20 md:px-12 sm:px-6"
    >
      <h2 className="text-6xl text-lighterCyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between xl:gap-24 lg:gap-18 bg-lightBrown p-8 rounded-2xl lg:flex-row md:flex-row sm:flex-col md:gap-10 sm:gap-8">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;