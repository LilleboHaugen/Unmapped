import React from "react"
import "./Hamburger.scss"

interface HamburgerProps {
  // Define your props here
}

export const Hamburger: React.FC<HamburgerProps> = () => {
  return (
    <div className="Hamburger">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}
