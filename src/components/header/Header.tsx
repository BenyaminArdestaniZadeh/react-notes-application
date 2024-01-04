import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";
import { SearchWrapper } from "../note.styled";

const Header = () => {
  return (
    <Flex direction={"column"} gap={"4"}>
      <SearchWrapper radius="full">
        <TextField.Slot pl={"5"}>
          <ReactSVG src="./svg/Search.svg" />
        </TextField.Slot>
        <TextField.Input
          size={"3"}
          variant="classic"
          placeholder="Search notes"
          style={{ color: "rgb(93,93,93)" }}
        />
      </SearchWrapper>
      {/* search */}
      <Flex gap={"5"} align={"center"} py={"3"}>
        <Button size={"3"} color="yellow">
          <Text>All</Text>
        </Button>
        <Button size={"3"} color="yellow">
          <ReactSVG src="./svg/FolderIcon.svg" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
