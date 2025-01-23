import { bookmarkType } from "@/types"
import { atom } from "jotai"

export const navbarIsOpenAtom = atom<boolean>(false)

export const bookmarksAtom = atom<bookmarkType[]>([])
