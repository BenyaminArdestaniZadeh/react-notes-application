import { atom } from "jotai";
import { NoteProps } from "../types/note.types";

export const noteAtom = atom<NoteProps[]>([]);
