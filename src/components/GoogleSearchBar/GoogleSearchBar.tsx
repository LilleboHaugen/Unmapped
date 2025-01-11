"use client"

import React, { useRef, useState } from "react"
import { Cross, SearchIcon } from "@/components/Icons"
import "./GoogleSearchBar.scss"

interface GoogleSearchBarProps {
  // Define your props here
}

export const GoogleSearchBar: React.FC<GoogleSearchBarProps> = () => {
  const [query, setQuery] = useState<string>("")

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = `https://www.google.com/search?q=${query}`
  }

  const handleDelete = () => {
    setQuery("")
    if (inputRef.current) inputRef.current.focus()
  }

  return (
    <form
      className="GoogleSearchBar"
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h2>Search the web</h2>
      <div className="input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <SearchIcon />
        <Cross />
        <div className="empty" onClick={handleDelete}></div>
      </div>
    </form>
  )
}
