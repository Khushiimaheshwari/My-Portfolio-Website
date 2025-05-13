import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:gap-12 sm:gap-3">
      <img
        src="Images/email-image.png"
        alt="email image"
        className="lg:max-w-[300px] md:max-w-[250px] sm:max-w-[200px] mb-2"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
