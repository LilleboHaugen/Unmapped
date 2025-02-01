"use client"

import React, { useState } from "react"
import { Plus } from "lucide-react"
import ReactDOM from "react-dom"
import { postBookmark } from "@/axios/apiCalls"
import { useAuth } from "@clerk/nextjs"
import { useAtom } from "jotai"
import { bookmarksAtom } from "@/context/formStore"
import "./AddBookmark.scss"

interface AddBookmarkProps {
  // Define your props here
}

export const AddBookmark: React.FC<AddBookmarkProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [url, setUrl] = useState("")
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)

  const { getToken } = useAuth()

  const handleAddBookmark = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setModalIsOpen(false)

    // Generate a unique temporary ID
    const tempId = `temp-${Date.now()}`

    // Add a temporary bookmark
    setBookmarks([
      ...bookmarks,
      {
        id: tempId,
        title: "Loading Bookmark...",
        description: "Bookmark is being added...",
        favicon: undefined,
        url: undefined,
      },
    ])

    const token = await getToken()

    let bookmark

    if (token) {
      bookmark = await postBookmark(url, token)
    }

    if (!bookmark.success) {
      alert(bookmark.message)
      setBookmarks([...bookmarks.filter((bookmark) => bookmark.id !== tempId)])
    } else {
      // Replace the temporary bookmark with the real one
      setBookmarks([
        ...bookmarks.filter((bookmark) => bookmark.id !== tempId), // Remove the temporary bookmark
        bookmark.data[0], // Add the real bookmark
      ])
    }

    setUrl("")
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
