import React from "react"
import Link from "next/link"
import "./NavbarMobile.scss"
import { HomeIcon, SearchIcon } from "@/components/Icons"
import { Hamburger } from "@/components/Hamburger/Hamburger"

interface NavbarMobileProps {
  // Define your props here
}

export const NavbarMobile: React.FC<NavbarMobileProps> = () => {
  return (
    <div className="NavbarMobile">
      <Link href={"/"}>
        <HomeIcon />
      </Link>
      <SearchIcon />
      <Hamburger />
    </div>
  )
}
