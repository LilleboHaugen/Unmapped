import React from "react"

interface FaviconProps {
  // Define your props here
}

export const Favicon: React.FC<FaviconProps> = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 257 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="128.244"
        y="0.243561"
        width="181.019"
        height="181.019"
        transform="rotate(45 128.244 0.243561)"
        fill="#E0F0EF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M98.7985 82.7079H82.7079V128.968C82.7079 153.407 102.519 173.218 126.957 173.218H165.172C169.616 173.218 173.218 169.616 173.218 165.172V82.7079H157.127V100.81L157.127 157.127H126.957C111.406 157.127 98.7985 144.52 98.7985 128.968V98.7986H98.7985V82.7079Z"
        fill="#49969C"
      />
    </svg>
  )
}
