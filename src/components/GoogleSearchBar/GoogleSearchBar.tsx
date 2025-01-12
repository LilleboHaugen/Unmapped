"use client"

import React, { useEffect, useRef, useState } from "react"
import { Cross, SearchIcon } from "@/components/Icons"
import { googleAutoComplete } from "@/axios/apiCalls"
import "./GoogleSearchBar.scss"
import Link from "next/link"

interface GoogleSearchBarProps {
  // Define your props here
}

export const GoogleSearchBar: React.FC<GoogleSearchBarProps> = () => {
  const [query, setQuery] = useState<string>("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [inputFocused, setInputFocused] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = `https://www.google.com/search?q=${query}`
  }

  const handleDelete = () => {
    setQuery("")
    setSuggestions([])
  }

  useEffect(() => {
    const handleAutoComplete = async () => {
      const result = await googleAutoComplete(query)
      setSuggestions(result)
    }

    handleAutoComplete()
  }, [query])

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
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        <SearchIcon />
        <Cross />
        <div className="empty" onClick={handleDelete}></div>
        {inputFocused && suggestions.length > 0 && (
          <div className="autoComplete" onMouseDown={(e) => e.preventDefault()}>
            {suggestions.map((suggestion) => {
              return (
                <Link
                  href={`https://www.google.com/search?q=${suggestion}`}
                  key={suggestion}
                >
                  <SearchIcon />
                  <p>{suggestion}</p>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </form>
  )
}
