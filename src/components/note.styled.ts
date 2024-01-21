import { Button, Text, TextField } from "@radix-ui/themes";
import styled from "styled-components";

export const SearchWrapper = styled(TextField.Root)`
  padding-inline: 1.2rem;
  padding-block: 0.6rem;
  width: 25rem;
  box-shadow: 1px 2px 6px 1px #5a5a5a;
  @media (min-width: 52rem) {
    width: 30rem;
  }
  @media (min-width: 76.8rem) {
    width: 35rem;
  }
`;

export const CreateNewNoteButton = styled(Button)`
  width: 50px;
  height: 50px;
  padding: 30px !important;
  border-radius: 50px !important;
  position: fixed;
  right: 2.4%;
  bottom: 5%;
`;

export const LimitText = styled(Text)<{ lineNumber?: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lineNumber};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
