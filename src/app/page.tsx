import { Bookmarks } from "@/components"
import "./HomePage.scss"

export default function HomePage() {
  return (
    <main className="HomePage">
      <section className="bookmarks">
        <Bookmarks />
      </section>
    </main>
  )
}
