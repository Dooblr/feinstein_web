import React, { useState } from 'react';
import WelcomeSection from './WelcomeSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './Contact/Contact';

const Home: React.FC = () => {
  const [typingHeader, setTypingHeader] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const submitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Your form handling logic goes here
  };

  // Handler for the custom submit button click
  const handleSubmit = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the default click behavior
    // Find and click the real submit button
    const submitButton = document.getElementById('real-submit-button') as HTMLButtonElement;
    submitButton.click();
  };

  return (
    <div>
      <WelcomeSection
        typingHeader={typingHeader}
        isTypingComplete={isTypingComplete}
        setTypingHeader={setTypingHeader}
        setIsTypingComplete={setIsTypingComplete}
      />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection submitContactForm={submitContactForm} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
