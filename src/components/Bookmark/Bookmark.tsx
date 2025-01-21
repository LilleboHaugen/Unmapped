import { bookmarkType } from "@/types"
import React from "react"
import "./Bookmark.scss"
import Link from "next/link"

interface BookmarkProps {
  bookmark: bookmarkType
}

export const Bookmark: React.FC<BookmarkProps> = ({ bookmark }) => {
  return (
    <Link href={bookmark.url || ""} className="Bookmark">
      {<img alt={bookmark.title} src={bookmark.icon} />}
    </Link>
  )
}
