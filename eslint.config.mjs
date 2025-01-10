import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier", // Add Prettier here
  ),
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "off", // Add any custom rules here
    },
  },
]

export default eslintConfig
