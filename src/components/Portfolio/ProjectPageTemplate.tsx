import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import projectsData from "../../data/projectsData" // Import projects data
import { IoArrowBackCircleOutline } from "react-icons/io5"
import "./ProjectPageTemplate.scss"

const ProjectPageTemplate: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>()

  // Find the project data based on the ID from the URL
  const project = projectsData.find((proj) => proj.id === projectId)

  if (!project) {
    return <div className="project-not-found">Project not found</div>
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  return (
    <div className="project-page-template">
      <button className="back-button" onClick={() => history.back()}>
        <IoArrowBackCircleOutline />
        <p>Back</p>
      </button>
      <h1 className="project-title">{project.title}</h1>

      {/* Stack images vertically instead of using a carousel */}
      {project.images && project.images.length > 0 ? (
        <div className="image-stack">
          {project.images.map((image, index) => (
            <div className="stacked-image-container" key={index}>
              <img
                src={image}
                alt={`${project.title} image ${index + 1}`}
                className="stacked-image"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-images">No images available for this project.</div>
      )}

      {/* Additional project information if needed */}
      {project.description && (
        <div className="project-description">
          <p>{project.description}</p>
        </div>
      )}

      {/* Optional features and technologies if provided */}
      {project.features && project.features.length > 0 && (
        <div className="project-features">
          <h3>Features:</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.technologies && project.technologies.length > 0 && (
        <div className="project-technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {project.link && (
        <div className="project-link">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      )}
    </div>
  )
}

export default ProjectPageTemplate
