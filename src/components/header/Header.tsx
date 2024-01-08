import { Button, Flex, Text } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // useEffect(() => {}, [searchValue]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
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
          onChange={(event) => handleSearchInput(event)}
          value={searchValue}
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
