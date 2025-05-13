import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const IntroAnimation = ({ onComplete }) => {
  const [showBrackets, setShowBrackets] = useState(false);
  const [showKM, setShowKM] = useState(false);
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowBrackets(true), 500); 
    setTimeout(() => setShowKM(true), 1000); 
    setTimeout(() => setShowFullName(true), 2000); 

    setTimeout(() => onComplete(), 4000); // Complete animation
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <AnimatePresence mode="wait">
        {!showFullName ? (
          <motion.div
            key="short"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-orange-400"
          >
            {showBrackets && "<"}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={showKM ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {showKM && "KM"}
            </motion.span>
            {showBrackets && ">"}
          </motion.div>
        ) : (
          <motion.div
            key="full"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-orange-400 sm:hidden md:block"
          >
            {"<Khushi Maheshwari>"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IntroAnimation;

