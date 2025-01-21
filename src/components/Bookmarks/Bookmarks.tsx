"use client"

import { AddBookmark } from "@/components/AddBookmark/AddBookmark"
import { Bookmark } from "@/components/Bookmark/Bookmark"
import { bookmarkType } from "@/types"
import React from "react"
import "./Bookmarks.scss"

interface BookmarksProps {
  // Define your props here
}

export const Bookmarks: React.FC<BookmarksProps> = () => {
  const bookmarks: bookmarkType[] = JSON.parse(
    localStorage.getItem("bookmarks") || "[]",
  )

  return (
    <div className="Bookmarks">
      {bookmarks.map((bookmark) => {
        return <Bookmark bookmark={bookmark} key={bookmark.url} />
      })}
      <AddBookmark />
    </div>
  )
}
