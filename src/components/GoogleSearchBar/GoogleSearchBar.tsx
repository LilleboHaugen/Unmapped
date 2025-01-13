"use client"

import React, { useEffect, useRef, useState } from "react"
import { Cross, SearchIcon } from "@/components/Icons"
import { googleAutoComplete } from "@/axios/apiCalls"
import Link from "next/link"
import "./GoogleSearchBar.scss"

interface GoogleSearchBarProps {
  // Define your props here
}

export const GoogleSearchBar: React.FC<GoogleSearchBarProps> = () => {
  const [query, setQuery] = useState<string>("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [suggestionsOpened, setSuggestionsOpened] = useState(false)
  const [suggestionIndex, setSuggestionIndex] = useState(-1)

  const ref = useRef<HTMLDivElement>(null)

  const handleAutoComplete = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = await googleAutoComplete(e.target.value)
    setSuggestions(result)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = `https://www.google.com/search?q=${query}`
  }

  const handleDelete = () => {
    setQuery("")
    setSuggestions([])
  }

  const handleKeyboardNavigation = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown" || e.key === "Tab") {
        e.preventDefault()
        setSuggestionIndex((prevIndex) => prevIndex + 1)

        if (suggestionIndex === suggestions.length - 1) {
          setSuggestionIndex(0)
        }
      }

      if (e.key === "ArrowUp") {
        setSuggestionIndex((prevIndex) => prevIndex - 1)

        if (suggestionIndex <= 0) {
          setSuggestionIndex(suggestions.length - 1)
        }
      }
    }
  }

  useEffect(() => {
    setSuggestionsOpened(true)
  }, [query])

  useEffect(() => {
    console.log(suggestionIndex)
    if (suggestionIndex > -1) setQuery(suggestions[suggestionIndex])
  }, [suggestionIndex, suggestions])

  useEffect(() => {
    if (!suggestionsOpened) setSuggestionIndex(-1)
  }, [suggestionsOpened])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setSuggestionsOpened(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <form
      className="GoogleSearchBar"
      method="POST"
      onSubmit={(e) => handleSubmit(e)}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setSuggestionsOpened(false)
        }
      }}
    >
      <h2>Search the web</h2>
      <div className="input" ref={ref}>
        <input
          type="text"
          value={query}
          onFocus={() => setSuggestionsOpened(true)}
          onChange={(e) => {
            setQuery(e.target.value)
            handleAutoComplete(e)
            setSuggestionIndex(-1)
          }}
          onKeyDown={(e) => handleKeyboardNavigation(e)}
        />
        <SearchIcon />
        <Cross />
        <div className="empty" onClick={handleDelete}></div>
        {suggestionsOpened && suggestions.length > 0 && (
          <ul className="autoComplete">
            {suggestions.map((suggestion, index) => {
              return (
                <Link
                  href={`https://www.google.com/search?q=${suggestion}`}
                  key={suggestion}
                  onFocus={(e) => setQuery(e.target.innerText)}
                  tabIndex={-1}
                  className={suggestionIndex === index ? "active" : ""}
                >
                  <SearchIcon />
                  <li>{suggestion}</li>
                </Link>
              )
            })}
          </ul>
        )}
      </div>
    </form>
  )
}
