import { useState } from 'react';
import { motion } from "framer-motion";
import './App.css'
import IntroAnimation from './components/navbar/Intro_Animation'
import Navbar_Main from './components/navbar/Navbar_Main'
import Hero_Main from './components/HeroSection/Hero_Main';
import SubHeroMain from './components/SubHeroSection/SubHeroMain';
import AboutMeMain from './components/AboutMeSection/AboutMeMain';
import SkillsMain from './components/SkillsSection/SkillsMain';
import SubSkills from './components/SkillsSection/SubSkillSection';
import ProjectsMain from './components/ProjectSection/ProjectMain';
import ExperienceMain from './components/ExperienceSection/ExperienceMain';
import ContactMeMain from './components/ContactMeSection/ContactMeMain';
import FooterMain from './components/Footer/FooterMain';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <main className='font-body overflow-x-hidden'>
      {!showPortfolio ? (
        <IntroAnimation onComplete={() => setShowPortfolio(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Navbar_Main />
          <Hero_Main/>
          <SubHeroMain/>
          <AboutMeMain/>
          <SkillsMain/>
          <SubSkills/>
          <ProjectsMain/>
          <ExperienceMain/>
          <ContactMeMain/>
          <FooterMain/>
        </motion.div>
      )}
    </main>
  )
}

export default App
