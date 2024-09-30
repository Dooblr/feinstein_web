import React from "react"
import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoApple,
} from "react-icons/bi"
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { DiSwift } from "react-icons/di"
import { FaAndroid, FaWindows } from "react-icons/fa"
import { SiMacos, SiNextdotjs, SiExpress } from "react-icons/si"

const SkillsSection: React.FC = () => {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        <div className="skill-container">
          <AiFillHtml5 className="skill-logo" />
          HTML
        </div>
        <div className="skill-container">
          <BiLogoCss3 className="skill-logo" />
          CSS
        </div>
        <div className="skill-container">
          <BiLogoJavascript className="skill-logo" />
          JavaScript
        </div>
        <div className="skill-container">
          <BiLogoTypescript className="skill-logo" />
          TypeScript
        </div>
        <div className="skill-container">
          <BiLogoReact className="skill-logo" />
          React
        </div>
        <div className="skill-container">
          <SiNextdotjs className="skill-logo" />
          Next
        </div>
        <div className="skill-container">
          <BiLogoNodejs className="skill-logo" />
          Node
        </div>
        <div className="skill-container">
          <SiExpress className="skill-logo" />
          Express
        </div>
        <div className="skill-container">
          <BiLogoFirebase className="skill-logo" />
          Firebase
        </div>
        <div className="skill-container">
          <AiFillGithub className="skill-logo" />
          Git
        </div>
        <div className="skill-container">
          <DiSwift className="skill-logo" />
          Swift
        </div>
        <div className="skill-container">
          <BiLogoApple className="skill-logo" />
          iOS
        </div>
        <div className="skill-container">
          <FaAndroid className="skill-logo" />
          Android
        </div>
        <div className="skill-container">
          <SiMacos className="skill-logo" />
          macOS
        </div>
        <div className="skill-container">
          <FaWindows className="skill-logo" />
          Windows
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
