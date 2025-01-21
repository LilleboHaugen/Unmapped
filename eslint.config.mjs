/* eslint-disable import/no-anonymous-default-export */
import { FlatCompat } from "@eslint/eslintrc"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  eslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      ...tseslint.configs.strictTypeChecked.rules,
      ...tseslint.configs.stylisticTypeChecked.rules,
      "@typescript-eslint/no-empty-object-type": "off",
      "@next/next/no-img-element": "off",
    },
  },
]
