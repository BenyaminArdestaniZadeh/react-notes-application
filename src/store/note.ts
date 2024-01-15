import { atom } from "jotai";
import { CategoryItemProps, NoteProps } from "../types/note.types";

export const noteAtom = atom<NoteProps[]>([]);
export const categoryAtom = atom<CategoryItemProps[]>([]);
export const selectedNote = atom<number[]>([]);
