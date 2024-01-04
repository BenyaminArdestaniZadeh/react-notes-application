import { Button, TextField } from "@radix-ui/themes";
import styled from "styled-components";

export const SearchWrapper = styled(TextField.Root)`
  padding-inline: 1.2rem;
  padding-block: 0.6rem;
  width: 25rem;
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
  right: 5%;
  bottom: 5%;
  cursor: pointer;
`;
