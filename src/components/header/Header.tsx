import { Button, Flex, Text } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { UseDebounce } from "../use-debounce/UseDebounce";
import { useAtom } from "jotai";
import { noteAtom } from "../../store/note";
import { NoteProps } from "../../types/note.types";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = UseDebounce<string>(searchValue, 500);
  const [noteItem, setNoteItem] = useAtom(noteAtom);

  useEffect(() => {}, [searchValue]);

  // console.log(debouncedValue);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = noteItem.filter((item) => {
      if (e.target.value === "") return noteItem;
      return (
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.bodyText.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    console.log(result);
    setNoteItem(result);
  };

  return (
    // <form>
    <Flex direction={"column"} gap={"4"}>
      <Flex gap={"2"} align={"center"} className="search-wrapper">
        <MagnifyingGlassIcon
          style={{ color: "whitesmoke", width: "25px", height: "25px" }}
        />
        <input
          type="search"
          className="search-input"
          placeholder="Search Notes"
          onChange={(e) => handleSearchInput(e)}
        />
      </Flex>

      <Flex gap={"5"} align={"center"} py={"3"}>
        <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
          <Text>All</Text>
        </Button>
        <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
          <ReactSVG src="./svg/FolderIcon.svg" />
        </Button>
      </Flex>
    </Flex>
    // </form>
  );
};

export default Header;
