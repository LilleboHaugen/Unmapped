"use client"

import React, { useEffect, useState } from "react"
import { AddBookmark } from "@/components/AddBookmark/AddBookmark"
import { Bookmark } from "@/components"
import { bookmarkType } from "@/types"
import "./Bookmarks.scss"
import { getUserBookmarks } from "@/axios/apiCalls"
import { useAtom } from "jotai"
import { bookmarksAtom } from "@/context/formStore"
import { useAuth } from "@clerk/nextjs"

interface BookmarksProps {
  // Define your props here
}

export const Bookmarks: React.FC<BookmarksProps> = () => {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom)
  const [loading, setLoading] = useState(true)

  const { getToken } = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken()

      if (token) {
        const data = await getUserBookmarks(token)
        setBookmarks(data.data.data)
        setLoading(false)
      }
    }

    fetchData()
  }, [getToken, setBookmarks])

  return (
    <div className="Bookmarks">
      {bookmarks.map((bookmark: bookmarkType) => {
        return <Bookmark bookmark={bookmark} key={bookmark.id} />
      })}
      {!loading && <AddBookmark />}
    </div>
  )
}
