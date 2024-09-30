import React from "react"
import { useWindowSize } from "@uidotdev/usehooks"
import profileImage from "../assets/images/profile.jpeg" // Adjust path as needed

const AboutSection: React.FC = () => {
  const windowSize = useWindowSize()

  return (
    <section className="about-section">
      <h2>About</h2>
      <div className={windowSize.width && windowSize.width > 768 ? "flex" : ""}>
        {windowSize.width && windowSize.width < 769 && (
          <img
            src={profileImage}
            width={300}
            height={300}
            alt="Profile picture"
            className="profile-image"
          />
        )}
        <p style={{ marginRight: "1rem" }}>
          I'm a web developer based in Southern Oregon, passionate about
          designing and building websites and applications. I began my journey
          in a class at Berklee College of Music in 2015, where I developed
          audio and MIDI applications using C and CSound. After working as a QA
          engineer and mobile developer at QSC's Cinema department until 2019, I
          shifted my focus to web development in 2022 and have since been
          building projects using React. I aim to create exceptional products
          for clients and seek opportunities to continue doing so as a developer
          with a keen eye for design and a strong technical foundation.
        </p>
        {windowSize.width && windowSize.width > 768 && (
          <img
            src={profileImage}
            width={300}
            height={300}
            alt="Profile picture"
            className="profile-image"
            style={{ marginTop: "1.5rem" }}
          />
        )}
      </div>
    </section>
  )
}

export default AboutSection
