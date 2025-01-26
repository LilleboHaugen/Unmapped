"use client"

import React, { useState } from "react"
import { Plus } from "lucide-react"
import { useAtom } from "jotai"
import { bookmarksAtom } from "@/context/formStore"
import "./AddBookmark.scss"
import ReactDOM from "react-dom"
import { fetchMetadata } from "@/axios/apiCalls"
import { bookmarkType } from "@/types"

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

    if (!bookmark.success) {
      alert(bookmark.message)
      setUrl("")
    } else {
      const localStorageBookmarks = JSON.parse(
        String(localStorage.getItem("bookmarks")),
      )

      const containsURL = localStorageBookmarks.filter(
        (localStorageBookmark: bookmarkType) =>
          localStorageBookmark.url ===
          url.replace(/^(https?:\/\/)?(www\.)?/, "https://").replace(/\/$/, ""),
      )

      if (containsURL.length > 0) {
        alert("Already added")
      } else {
        setBookmarks([...bookmarks, bookmark.data])
      }

      setUrl("")
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
