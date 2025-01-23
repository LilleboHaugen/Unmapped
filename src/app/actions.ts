"use server"

import * as cheerio from "cheerio"
import { getWebsiteData } from "@/axios/apiCalls"
import { bookmarkType } from "@/types"

export const fetchMetadata = async (url: string) => {
  const data = await getWebsiteData(url)

  const $ = cheerio.load(data)

  // Extract main favicon(s)
  const favicons = $(
    'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]',
  )
    .map((_, el) => $(el).attr("href"))
    .get()
    .filter(Boolean) // Remove undefined/null values

  // If no favicons were found, fallback to `/favicon.ico`
  if (favicons.length === 0) {
    favicons.push(new URL("/favicon.ico", url).href)
  }

  const metadata: bookmarkType = {
    title: $("title").text(),
    description: $('meta[name="description"]').attr("content") || "",
    favicon: favicons[favicons.length - 1],
    url: url,
  }

  return metadata
}
