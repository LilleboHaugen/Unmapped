import axios from "axios"

export const fetchMetadata = async (url: string) => {
  const { data } = await axios.post("http://localhost:3000/bookmark", {
    requestURL: url,
  })

  return data
}
