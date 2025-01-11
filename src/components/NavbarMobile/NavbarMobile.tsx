"use client"

import React from "react"
import Link from "next/link"
import { Favicon } from "@/components/Icons"
import { Hamburger } from "@/components/Hamburger/Hamburger"
import { useAtom } from "jotai"
import { navbarIsOpenAtom } from "@/context/formStore"
import "./NavbarMobile.scss"

interface NavbarMobileProps {
  // Define your props here
}

export const NavbarMobile: React.FC<NavbarMobileProps> = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useAtom(navbarIsOpenAtom)

  return (
    <div className="NavbarMobile">
      <Link
        href={"/"}
        className="icon"
        onClick={() => navbarIsOpen && setNavbarIsOpen(false)}
      >
        <Favicon />
        <h3>Unmapped</h3>
      </Link>
      <div className="icon" onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
        <Hamburger />
      </div>
    </div>
  )
}
