import React from "react"

type TextDescriptionProps = {
  title: string
  description: string
  features?: string[]
  technologies?: string[]
  link?: string
  linkLabel?: string
}

const TextDescription: React.FC<TextDescriptionProps> = ({
  title,
  description,
  features = [],
  technologies = [],
  link,
  linkLabel,
}) => {
  return (
    <div className="text-description">
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Technologies</h2>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkLabel}
        </a>
      )}
    </div>
  )
}

export default TextDescription
