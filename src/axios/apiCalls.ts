import axios from "axios"

export const googleAutoComplete = async (query: string) => {
  const result = await axios.get(`/api/getgoogleautocomplete`, {
    params: { query },
  })

  return result.data
}
