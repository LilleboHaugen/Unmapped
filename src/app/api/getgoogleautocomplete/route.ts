import iconv from "iconv-lite"

export async function GET(request: Request) {
  try {
    // Extract the query parameter from the request URL
    const url = new URL(request.url)
    const query = url.searchParams.get("query")

    const result = await fetch(
      `https://suggestqueries.google.com/complete/search?&output=chrome&q=${query?.substring(0, 100)}`,
    )

    // Read the raw response as a buffer
    const arrayBuffer = await result.arrayBuffer()

    // Decode the buffer using iconv-lite
    const decodedText = iconv.decode(Buffer.from(arrayBuffer), "ISO-8859-1")

    // Parse the decoded text as JSON
    const json = JSON.parse(decodedText)

    return new Response(JSON.stringify(json[1].slice(0, 10)), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
    }

    return new Response(
      JSON.stringify({ error: "An unknown error occurred" }),
      { status: 500 },
    )
  }
}
