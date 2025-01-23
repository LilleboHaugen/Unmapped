import axios from "axios"

// Get website data for scraping
export const getWebsiteData = async (url: string) => {
  const { data } = await axios.get(url)

  return data
}
