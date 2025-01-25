"use client"

import React, { useState } from "react"
import { fetchMetadata } from "@/app/actions"
import { Plus } from "lucide-react"
import { useAtom } from "jotai"
import { bookmarksAtom } from "@/context/formStore"
import "./AddBookmark.scss"
import ReactDOM from "react-dom"

interface AddBookmarkProps {
  // Define your props here
}

export const AddBookmark: React.FC<AddBookmarkProps> = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [url, setUrl] = useState("")

  const handleAddBookmark = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModalIsOpen(false)

    const bookmark = await fetchMetadata(url)

    if (bookmark) {
      const containURL = bookmarks.filter((bookmark) => bookmark.url === url)

      if (containURL.length === 0) {
        setBookmarks([...bookmarks, bookmark])
        setUrl("")
      }
    }
  }

  return (
    <>
      <div className="AddBookmark" onClick={() => setModalIsOpen(true)}>
        <Plus />
      </div>
      {modalIsOpen &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="content">
              <form method="POST" onSubmit={(e) => handleAddBookmark(e)}>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  autoFocus
                />
              </form>
            </div>
            <div
              className="overlay"
              onClick={() => {
                setModalIsOpen(false)
              }}
            ></div>
          </div>,
          document.body,
        )}
    </>
  )
}
