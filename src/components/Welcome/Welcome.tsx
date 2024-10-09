import React, { useEffect, RefObject } from "react";
import { motion } from "framer-motion";
import { DownIcon } from "../../assets/icons/DownIcon"; // Adjust path as needed
import "./Welcome.scss";

interface WelcomeProps {
  typingHeader: string;
  isTypingComplete: boolean;
  setTypingHeader: React.Dispatch<React.SetStateAction<string>>;
  setIsTypingComplete: React.Dispatch<React.SetStateAction<boolean>>;
  aboutSectionRef: RefObject<HTMLElement>; // New prop for the about section ref
}

const Welcome: React.FC<WelcomeProps> = ({
  typingHeader,
  isTypingComplete,
  setTypingHeader,
  setIsTypingComplete,
  aboutSectionRef: firstSectionRef,
}) => {
  const headerText = "Dan Feinstein";

  const subheaderAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 1.5 },
  };

  // Typing text effect
  useEffect(() => {
    let currentHeaderText = "";
    let i = 0;

    const typeLetter = () => {
      if (i < headerText.length) {
        currentHeaderText += headerText[i];
        setTypingHeader(currentHeaderText);
        i++;
        setTimeout(typeLetter, 85);
      } else {
        setIsTypingComplete(true); // Set typing complete to true when typing is done
      }
    };
    typeLetter();
  }, [headerText, setTypingHeader, setIsTypingComplete]);

  // Handle scroll to the About section
  const handleScrollToFirstSection = () => {
    if (firstSectionRef.current) {
      firstSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1 className="typing-header">
          {typingHeader}
          <span
            className={
              isTypingComplete ? "typing-cursor blinking" : "typing-cursor"
            }
          ></span>
        </h1>
        <motion.h2
          initial={subheaderAnimation.initial}
          animate={subheaderAnimation.animate}
          transition={subheaderAnimation.transition}
        >
          Web Developer
        </motion.h2>
        {/* DownIcon triggers the scroll when clicked */}
        <div onClick={handleScrollToFirstSection}>
          <DownIcon />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
