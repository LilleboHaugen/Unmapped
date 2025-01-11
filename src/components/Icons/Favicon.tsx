import React from "react"

interface FaviconProps {
  // Define your props here
}

export const Favicon: React.FC<FaviconProps> = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 316 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="158.279"
        y="0.558441"
        width="223.051"
        height="223.051"
        transform="rotate(45 158.279 0.558441)"
        fill="#E0F0EF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M121.997 102.171H102.171V159.172C102.171 189.285 126.582 213.696 156.694 213.696H203.783C209.258 213.696 213.696 209.258 213.696 203.783V102.171H193.869V121.997V124.476V193.869H156.694C137.532 193.869 121.997 178.335 121.997 159.172V124.476V121.997V102.171Z"
        fill="#49979D"
      />
    </svg>
  )
}
