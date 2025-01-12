"use client"

import React from "react"
import { useAtom } from "jotai"
import { navbarIsOpenAtom } from "@/context/formStore"
import "./NavbarMobileMenu.scss"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavbarMobileMenuProps {
  // Define your props here
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useAtom(navbarIsOpenAtom)

  const pathname = usePathname()

  console.log(pathname)

  return (
    <div className={`NavbarMobileMenu ${navbarIsOpen ? "navbarIsOpen" : ""}`}>
      <div className="content">
        <nav>
          <Link
            href={"/"}
            onClick={() => setNavbarIsOpen(false)}
            className={pathname === "/" ? "active" : ""}
          >
            Homepage
          </Link>
          <Link
            href={"/kanban"}
            onClick={() => setNavbarIsOpen(false)}
            className={pathname === "/kanban" ? "active" : ""}
          >
            Kanban
          </Link>
          <Link
            href={"/vault"}
            onClick={() => setNavbarIsOpen(false)}
            className={pathname === "/vault" ? "active" : ""}
          >
            Vault
          </Link>
        </nav>
      </div>
    </div>
  )
}
