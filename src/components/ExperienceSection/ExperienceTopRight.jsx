const ExperienceTopRight = () => {
    return (
      <div className="xl:w-[70%] lg:w-[60%] border border-lightBrown p-6 rounded-xl text-lightGrey text-md leading-relaxed mt-10">
      <div className="flex flex-col justify-between items-center mb-8">
        <h4 className="lg:block sm:hidden md:text-2xl sm:text-xl font-semibold text-orange mb-2">
          Web Development Intern | Zidio Development
        </h4>
        <h4 className="lg:hidden sm:block md:text-2xl sm:text-xl font-semibold text-orange mb-2">
          Web Development Intern
        </h4>
        <h3 className="lg:hidden sm:block md:text-2xl sm:text-xl font-semibold text-orange mb-2">
          Zidio Development
        </h3>
        <span className="italic text-base">March 2025 - Present</span>
      </div>
      <ul className="list-disc pl-5 space-y-4 mt-3 md:text-lg sm:text-base">
        <li>
          <span className="font-semibold text-white">Tech Stack:</span> MERN stack, Tailwind CSS, OAuth, RESTful API’s, and payment gateways.
        </li>
        <li>
          Led a team to develop a client-focused <span className="font-semibold text-white">e-commerce</span> website, completing the project <span className="font-bold text-white">2 weeks ahead of deadlines</span> while ensuring clean, scalable and high-quality results.
        </li>
        <li>
          Worked extensively on <span className="font-semibold text-white">collaborative development</span> of core features such as advanced product filtering, real-time order tracking, an inventory admin panel, and <span className="font-semibold text-white">role-based authentication</span>, improving code performance by <span className="font-bold text-white">12%</span>.
        </li>
      </ul>
    </div>
    );
  };
  
  export default ExperienceTopRight;