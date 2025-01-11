"use client"

import React from "react"
import { useAtom } from "jotai"
import { navbarIsOpenAtom } from "@/context/formStore"
import "./NavbarMobileMenu.scss"
import Link from "next/link"

interface NavbarMobileMenuProps {
  // Define your props here
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useAtom(navbarIsOpenAtom)

  return (
    <div className={`NavbarMobileMenu ${navbarIsOpen ? "navbarIsOpen" : ""}`}>
      <div className="content">
        <nav>
          <Link href={"/"} onClick={() => setNavbarIsOpen(false)}>
            Homepage
          </Link>
        </nav>
      </div>
    </div>
  )
}
