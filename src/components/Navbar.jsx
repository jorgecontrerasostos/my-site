import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Avatar from "../../static/svg/avatar.svg"
import "../../static/css/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar justify-between">
      <div className="w-16 mr-3">
        <img alt="" src={Avatar} href="#presentation"></img>
      </div>
      <div className="w-1/2 links-container">
        <AnchorLink href="#aboutme" className="nav-link">
          About Me
        </AnchorLink>
        <AnchorLink href="#education" className="nav-link">
          Education
        </AnchorLink>
        <AnchorLink href="#work-experience" className="nav-link">
          Work Experience
        </AnchorLink>
        <AnchorLink href="#skills" className="nav-link">
          Skills
        </AnchorLink>
        <AnchorLink href="#projects" className="nav-link">
          Projects
        </AnchorLink>
        <AnchorLink href="#hobbies" className="nav-link">
          Hobbies
        </AnchorLink>
      </div>
    </nav>
  )
}
export default Navbar
