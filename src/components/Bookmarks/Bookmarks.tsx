"use client"

import React, { useEffect } from "react"
import { AddBookmark } from "@/components/AddBookmark/AddBookmark"
import { Bookmark } from "@/components/Bookmark/Bookmark"
import { bookmarkType } from "@/types"
import { useAtom } from "jotai"
import { bookmarksAtom } from "@/context/formStore"
import "./Bookmarks.scss"

interface BookmarksProps {
  // Define your props here
}

export const Bookmarks: React.FC<BookmarksProps> = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)

  useEffect(() => {
    if (localStorage.getItem("bookmarks")) {
      setBookmarks(JSON.parse(localStorage.getItem("bookmarks") || "[]"))
    }
  }, [setBookmarks])

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  return (
    <div className="Bookmarks">
      {bookmarks.map((bookmark: bookmarkType) => {
        return <Bookmark bookmark={bookmark} key={bookmark.url} />
      })}
      <AddBookmark />
    </div>
  )
}
