import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "../styles/index.scss"
import { NavbarMobile } from "@/components"

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Unmapped",
  description:
    "Template App with NextJS 15, Sass, Prettier, Eslint, Husky, Lint-staged", // TODO: Fiks
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="App--dark">
      <body className={outfit.className}>
        <NavbarMobile />
        <main>{children}</main>
      </body>
    </html>
  )
}
