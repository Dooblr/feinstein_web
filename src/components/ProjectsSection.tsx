import React from "react"
import { FaPaw, FaWifi } from "react-icons/fa"
import { GiMineExplosion, GiMermaid } from "react-icons/gi"
import { TbVinyl } from "react-icons/tb"
import bahpImage from "../assets/images/bahp.svg" // Adjust path as needed

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div
          className="projects-item"
          onClick={() => (window.location.pathname = "/bahp")}
        >
          <img
            src={bahpImage}
            alt="Bay Area Health Psychology Document Manager"
            className="project-image"
            id="bahp-image"
          />
          <div className="project-label-spacer"></div>
          <p style={{ lineHeight: "1rem" }}>
            Bay Area Health Psychology <br /> Document Manager
          </p>
        </div>
        <div
          className="projects-item"
          onClick={() => (window.location.pathname = "/ursabase")}
        >
          <FaPaw
            className="project-image project-icon"
            color="rgb(16, 191, 174)"
          />
          <div className="project-label-spacer"></div>
          <p>Ursabase</p>
        </div>
        <div
          className="projects-item"
          onClick={() => (window.location.pathname = "/discolist")}
        >
          <TbVinyl className="project-image project-icon" color="black" />
          <div className="project-label-spacer"></div>
          <p>DiscoList</p>
        </div>
        <div className="projects-item">
          <GiMineExplosion
            className="project-image project-icon"
            color="orange"
          />
          <div className="project-label-spacer"></div>
          <p>ReactSweeper</p>
        </div>
        <div className="projects-item">
          <GiMermaid className="project-image project-icon" color="blue" />
          <div className="project-label-spacer"></div>
          <p>Mermaid Morro Bay</p>
        </div>
        <div className="projects-item">
          <FaWifi className="project-image project-icon" color="black" />
          <div className="project-label-spacer"></div>
          <p>Ethernet Device Discoverer (iOS)</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
