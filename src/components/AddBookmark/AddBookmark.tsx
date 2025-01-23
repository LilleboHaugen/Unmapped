"use client"

import React, { useState } from "react"
import { fetchMetadata } from "@/app/actions"
import { Plus } from "lucide-react"
import { useAtom } from "jotai"
import { bookmarksAtom } from "@/context/formStore"
import "./AddBookmark.scss"

interface AddBookmarkProps {
  // Define your props here
}

export const AddBookmark: React.FC<AddBookmarkProps> = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleAddBookmark = async () => {
    const url = "https://www.nrk.no/"

    const bookmark = await fetchMetadata(url)

    if (bookmark) {
      const containURL = bookmarks.filter((bookmark) => bookmark.url === url)

      if (containURL.length === 0) {
        setBookmarks([...bookmarks, bookmark])
      }
    }
  }

  console.log(handleAddBookmark)

  return (
    <div className="AddBookmark" onClick={() => setModalIsOpen(true)}>
      <Plus />
      {modalIsOpen && <div className="modal">Modal</div>}
    </div>
  )
}
