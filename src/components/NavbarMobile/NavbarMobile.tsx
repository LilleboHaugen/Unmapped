import React from "react"
import Link from "next/link"
import "./NavbarMobile.scss"
import { Favicon } from "@/components/Icons"
import { Hamburger } from "@/components/Hamburger/Hamburger"

interface NavbarMobileProps {
  // Define your props here
}

export const NavbarMobile: React.FC<NavbarMobileProps> = () => {
  return (
    <div className="NavbarMobile">
      <Link href={"/"} className="icon">
        <Favicon />
      </Link>
      <div className="icon">
        <Hamburger />
      </div>
    </div>
  )
}
