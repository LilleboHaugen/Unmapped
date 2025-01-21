"use client"

import { fetchMetadata } from "@/app/actions"
import { bookmarkType } from "@/types"
import React from "react"
import "./AddBookmark.scss"
import { Plus } from "@/components/Icons"

interface AddBookmarkProps {
  // Define your props here
}

export const AddBookmark: React.FC<AddBookmarkProps> = () => {
  const bookmarks: bookmarkType[] = JSON.parse(
    localStorage.getItem("bookmarks") || "[]",
  )

  return (
    <div
      className="AddBookmark"
      onClick={async () => {
        const bookmark: bookmarkType = await fetchMetadata(
          "https://www.nrk.no/",
        )

        bookmarks.push(bookmark)
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
      }}
    >
      <Plus />
    </div>
  )
}
