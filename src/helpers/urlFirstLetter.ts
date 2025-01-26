export const urlFirstLetter = (url: string) => {
  // Ensure a consistent format
  url = url.toLowerCase().trim()

  // Remove protocol
  url = url.replace(/^https?:\/\//, "")

  // Remove "www."
  url = url.replace(/^www\./, "")

  // Remove everything after first "/"
  url = url.split("/")[0]

  // Return the first letter
  return url[0] || ""
}
