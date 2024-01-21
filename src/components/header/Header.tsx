import { Button, Flex, Text } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
// import { useState } from "react";
// import { UseDebounce } from "../use-debounce/UseDebounce";
import { useAtom } from "jotai";
import { categoryItemAtom, noteAtom } from "../../store/note";
import NoteCategories from "./note-category/NoteCategory";
import DeleteButton from "../shared/delete-button/DeleteButton";
import CustomDialog from "../shared/dialog/CustomDialog";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { CategoryItemProps } from "../../types/note.types";

const Header = () => {
  // const [searchValue, setSearchValue] = useState<string>("");
  // const debouncedValue = UseDebounce<string>(searchValue, 500);
  const [noteItem, setNoteItem] = useAtom(noteAtom);
  const [categoryCardItems] = useAtom(categoryItemAtom);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = noteItem.filter((item) => {
      return (
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.bodyText.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setNoteItem(result);
  };

  return (
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

      <Flex width={"100%"} justify={"between"} align={"center"}>
        <Flex width={"100%"} gap={"5"} align={"center"}>
          <Button size={"3"} color="yellow">
            <Text>All</Text>
          </Button>
          {/* categories */}
          <HeaderCategoryWrapper
            py={"2"}
            px={"4"}
            gap={"3"}
            categoryCardItems={categoryCardItems}
          >
            {categoryCardItems &&
              categoryCardItems.map((item) => (
                <Button
                  key={item.id}
                  size={"3"}
                  id={item.id.toString()}
                  color="cyan"
                  className="selected-category"
                  // onClick={() => console.log(item.id)}
                >
                  <Text weight={"bold"}>{item.title}</Text>
                </Button>
              ))}
          </HeaderCategoryWrapper>
        </Flex>
        <Flex gap={"5"} align={"center"} py={"3"}>
          <CustomDialog
            triger={
              <Button size={"3"} color="yellow">
                <ReactSVG src="./svg/FolderIcon.svg" />
              </Button>
            }
            content={(dismiss) => <NoteCategories dismiss={dismiss} />}
            backgroundColor="#111111"
          />
          {/* <Button size={"3"} color="yellow" >
            <NoteCategories />
          </Button> */}
          <DeleteButton />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

const HeaderCategoryWrapper = styled(Flex)<{
  categoryCardItems: CategoryItemProps[];
}>`
  max-width: 50rem;
  border-radius: 8px;
  border: ${(props) =>
    props.categoryCardItems.length > 0 ? "1px solid yellow" : "none"};
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
`;
