import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaExternalLinkAlt, FaCameraRetro } from "react-icons/fa";
import { TbVinyl } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeInContainer, fadeInItem, scaleOnHover, scaleOnTap } from "../../utils/animations";
import projectsData from "../../data/projectsData";
import "./Portfolio.scss";
import bahpLogo from "../../assets/images/bahp/0.svg";
import rbgLogo from '../../assets/images/rbgmowing/favicon.png'
import huckleberryLogo from '../../assets/images/huckleberryconnect/icon.png'
import babbageLogo from '../../assets/images/babbage_logo.svg'

// Map project IDs to specific icons
const projectIcons: { [key: string]: JSX.Element } = {
  ursabase: <FaPaw className="project-icon" color="rgb(16, 191, 174)" />,
  bahp: <img src={bahpLogo} alt="BAHP Logo" className="project-icon" />,
  rbgmowing: <img src={rbgLogo} alt="RBG Mowing" className="project-icon" />,
  mymalarkeymedia: <FaCameraRetro className="project-icon" color="black" />,
  huckleberryconnect: <img src={huckleberryLogo} alt="Huckleberry Connect" className="project-icon" />,
  babbageconnect: <img src={babbageLogo} alt="Babbage Connect" className="project-icon" />,
};

// Default icon if project ID doesn't have a specific icon
const defaultIcon = <TbVinyl className="project-icon" color="gray" />;

// Utility function to get the project icon
const getProjectIcon = (projectId: string): JSX.Element => {
  return projectIcons[projectId] || defaultIcon;
};

const Portfolio: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <motion.div 
        className="portfolio-list"
        variants={fadeInContainer}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {projectsData.map((project) => {
          const { id, title, link, description } = project;
          
          const itemContent = (
            <motion.div
              className="portfolio-item"
              variants={fadeInItem}
              whileHover={scaleOnHover}
              whileTap={scaleOnTap}
            >
              <div className="portfolio-item-icon">
                {getProjectIcon(id)}
              </div>
              <div className="portfolio-item-content">
                <h3 className="portfolio-item-title">
                  {title}
                  {link && <FaExternalLinkAlt className="external-link-icon" />}
                </h3>
                {description && (
                  <p className="portfolio-item-description">{description}</p>
                )}
              </div>
            </motion.div>
          );

          return link ? (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              aria-label={`Visit ${title} - opens in new tab`}
            >
              {itemContent}
            </a>
          ) : (
            <Link
              key={id}
              to={`/portfolio/${id}`}
              className="portfolio-link"
              aria-label={`View ${title} project details`}
            >
              {itemContent}
            </Link>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Portfolio;
