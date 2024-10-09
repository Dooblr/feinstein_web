// Home.tsx

import React, { useState, useRef } from "react"
import Welcome from "./Welcome/Welcome"
import About from "./About/About"
import Portfolio from "./Portfolio/Portfolio"
import SkillsSection from "./Skills/Skills"
import Contact from "./Contact/Contact"

const Home: React.FC = () => {
  const [typingHeader, setTypingHeader] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  // Create a reference for the About section
  const firstSectionRef = useRef<HTMLElement>(null)

  return (
    <div>
      <Welcome
        typingHeader={typingHeader}
        isTypingComplete={isTypingComplete}
        setTypingHeader={setTypingHeader}
        setIsTypingComplete={setIsTypingComplete}
        aboutSectionRef={firstSectionRef} // Pass the reference to Welcome
      />
      {/* Attach the ref to the About section */}

      <section ref={firstSectionRef}>
        <Portfolio />
      </section>
      <div className="section-line" />
      <SkillsSection />
      <div className="section-line" />
      <About />
      <div className="section-line" />
      <Contact />
    </div>
  )
}

export default Home
