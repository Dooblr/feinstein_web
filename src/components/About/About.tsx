import React from "react"
import { useWindowSize } from "@uidotdev/usehooks"
import profileImage from "../../assets/images/headshot.webp" // Adjust path as needed
import "./About.scss"

const About: React.FC = () => {
  const windowSize = useWindowSize()

  return (
    <section className="about-section">
      <h2>About</h2>
      {/* Use a flex container for better centering */}
      <div className="about-content">
        {windowSize.width && windowSize.width < 769 && (
          <img
            src={profileImage}
            width={300}
            height={300}
            alt="Profile picture"
            className="profile-image"
          />
        )}
        <p className="about-text">
          I'm a web developer based in Southern Oregon, passionate about
          building websites and applications. I began learning software
          development at Berklee College of Music in 2015, creating audio and
          MIDI applications using C.
          <br />
          <br />
          After graduating, I worked for QSC's Cinema division as a QA and
          mobile developer, while learning web development on the side. In 2022,
          I shifted my focus to web and have since been building websites,
          apps, and games.
          <br />
          <br />
          Get in touch using the contact section below.
        </p>
        {windowSize.width && windowSize.width > 768 && (
          <img
            src={profileImage}
            width={300}
            height={300}
            alt="Profile picture"
            className="profile-image"
          />
        )}
      </div>
    </section>
  )
}

export default About
