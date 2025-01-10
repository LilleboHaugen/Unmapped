import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "../styles/index.scss"

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "NextJS 15 Template App",
  description:
    "Template App with NextJS 15, Sass, Prettier, Eslint, Husky, Lint-staged",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="App--dark">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
