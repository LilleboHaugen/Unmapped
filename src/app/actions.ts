"use server"

import getMetaData from "metadata-scraper"

export const fetchMetadata = async (url: string) => {
  const data = await getMetaData(url)
  return {
    title: data.title,
    url: data.url,
    icon: data.icon,
    image: data.image,
  }
}
