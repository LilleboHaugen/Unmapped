"use client"

import React from "react"
import "./Hamburger.scss"
import { useAtomValue } from "jotai"
import { navbarIsOpenAtom } from "@/context/formStore"

interface HamburgerProps {
  // Define your props here
}

export const Hamburger: React.FC<HamburgerProps> = () => {
  const navbarIsOpen = useAtomValue(navbarIsOpenAtom)

  return (
    <div className={`Hamburger ${navbarIsOpen ? "navbarIsOpen" : ""}`}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}
