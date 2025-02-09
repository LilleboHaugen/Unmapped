"use client"

import { bookmarkType } from "@/types"
import React from "react"
import Link from "next/link"
import "./Bookmark.scss"

interface BookmarkProps {
  bookmark: bookmarkType
}

export const Bookmark: React.FC<BookmarkProps> = ({ bookmark }) => {
  return (
    <Link href={bookmark.url || ""} className="Bookmark">
      {bookmark.favicon ? (
        <img alt={bookmark.title} src={bookmark.favicon} />
      ) : (
        bookmark.url && (
          <p>{bookmark.url.replace(/^(https?:\/\/)?(www\.)?/, "")[0]}</p>
        )
      )}
    </Link>
  )
}
