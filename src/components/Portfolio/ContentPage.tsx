import React from "react"
import Carousel from "./Carousel"
import TextDescription from "./TextDescription"
import "./ContentPage.scss"

type ContentPageProps = {
  title: string
  description: string
  images: string[]
  features?: string[]
  technologies?: string[]
  link?: string
  linkLabel?: string
  carouselHeight?: number
}

const ContentPage: React.FC<ContentPageProps> = ({
  title,
  description,
  images,
  features,
  technologies,
  link,
  linkLabel,
  carouselHeight,
}) => {
  return (
    <div className="content-page">
      <Carousel images={images} height={carouselHeight} />
      <TextDescription
        title={title}
        description={description}
        features={features}
        technologies={technologies}
        link={link}
        linkLabel={linkLabel}
      />
    </div>
  )
}

export default ContentPage
