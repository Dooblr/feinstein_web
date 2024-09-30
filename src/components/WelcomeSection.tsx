// WelcomeSection.tsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { DownIcon } from "../assets/icons/DownIcon"; // Adjust path as needed
import "./WelcomeSection.scss";

interface WelcomeSectionProps {
  typingHeader: string;
  isTypingComplete: boolean;
  setTypingHeader: React.Dispatch<React.SetStateAction<string>>;
  setIsTypingComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  typingHeader,
  isTypingComplete,
  setTypingHeader,
  setIsTypingComplete,
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

  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <h1>
          {typingHeader}
          <span className={isTypingComplete ? "typing-cursor blinking" : "typing-cursor"}></span>
        </h1>
        <motion.h2 initial={subheaderAnimation.initial} animate={subheaderAnimation.animate} transition={subheaderAnimation.transition}>
          Web Developer
        </motion.h2>
        {/* Display DownIcon */}
        <DownIcon />
      </div>
    </section>
  );
};

export default WelcomeSection;
