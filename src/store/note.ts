import { atom } from "jotai";
import { CategoryItemProps, NoteProps } from "../types/note.types";

export const noteAtom = atom<NoteProps[]>([]);
export const categoryItemAtom = atom<CategoryItemProps[]>([]);
export const selectedNoteIdAtom = atom<number[]>([]);
