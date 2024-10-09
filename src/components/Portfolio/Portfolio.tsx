import React from "react";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { TbVinyl } from "react-icons/tb";
import projectsData from "../../data/projectsData"; // Import the actual projectsData
import "./Portfolio.scss";
import bahpLogo from "../../assets/images/bahp/0.svg";
import rbgLogo from '../../assets/images/rbgmowing/favicon.png'
import huckleberryLogo from '../../assets/images/huckleberryconnect/icon.png'
import { FaCameraRetro } from "react-icons/fa";
import babbageLogo from '../../assets/images/babbage_logo.svg'

// Map project IDs to specific icons if needed
const projectIcons: { [key: string]: JSX.Element } = {
  ursabase: <FaPaw className="project-image project-icon" color="rgb(16, 191, 174)" />,
  bahp: <img src={bahpLogo} alt="BAHP Logo" className="project-image project-icon" />,
  rbgmowing: <img src={rbgLogo} alt="RBG Mowing" className="project-image project-icon" />,
  mymalarkeymedia: <FaCameraRetro className="project-image project-icon" color="black" />,
  huckleberryconnect: <img src={huckleberryLogo} alt="Huckleberry Connect" className="project-image project-icon" />,
  babbageconnect: <img src={babbageLogo} alt="Babbage Connect" className="project-image project-icon" />,
};

// Default icon if project ID doesn't have a specific icon
const defaultIcon = <TbVinyl className="project-image project-icon" color="gray" />;

// Utility function to get the project icon
const getProjectIcon = (projectId: string): JSX.Element => {
  return projectIcons[projectId] || defaultIcon;
};

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projectsData.map((project) => {
          const { id, title, link } = project;
          
          // Determine if the project should be an internal or external link
          const linkComponent = link ? (
            // Render an <a> tag for external URLs
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-item"
            >
              <div className="project-image-container">
                {/* Render the project icon (or default icon) */}
                {getProjectIcon(id)}
              </div>
              <div className="project-content">
                <p>{title}</p>
              </div>
            </a>
          ) : (
            // Render a <Link> component for internal URLs
            <Link key={id} to={`/portfolio/${id}`} className="projects-item">
              <div className="project-image-container">
                {/* Render the project icon (or default icon) */}
                {getProjectIcon(id)}
              </div>
              <div className="project-content">
                <p>{title}</p>
              </div>
            </Link>
          );

          return linkComponent;
        })}
      </div>
      <div className="projects-footer">More projects available upon request.</div>
    </section>
  );
};

export default Portfolio;
