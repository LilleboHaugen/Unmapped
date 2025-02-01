"use client"

import React, { useEffect } from "react"
import { useAtom } from "jotai"
import { navbarIsOpenAtom } from "@/context/formStore"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./NavbarMobileMenu.scss"
import { UserButton } from "@clerk/nextjs"

interface NavbarMobileMenuProps {
  // Define your props here
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useAtom(navbarIsOpenAtom)

  const pathname = usePathname()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavbarIsOpen(false)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [setNavbarIsOpen])

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
      <UserButton />
    </div>
  )
}
