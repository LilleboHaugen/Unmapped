import axios, { AxiosError } from "axios"

// Post bookmark
export const postBookmark = async (url: string, token: string) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/bookmarks",
      { requestURL: url },
      { headers: { Authorization: `Bearer ${token}` } },
    )
    return response.data
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data
    } else {
      return {
        success: false,
        message: "Failed to add bookmark",
      }
    }
  }
}

// Get all user bookmarks
export const getUserBookmarks = async (token: string) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/v1/bookmarks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data
    } else {
      return {
        success: false,
        message: "Failed to fetch bookmarks",
      }
    }
  }
}
