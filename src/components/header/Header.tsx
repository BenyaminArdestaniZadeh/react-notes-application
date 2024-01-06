import { Button, Flex, Text } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <form>
      <Flex direction={"column"} gap={"4"}>
        <input className="search-input" placeholder="Search Notes" />
        <Flex gap={"5"} align={"center"} py={"3"}>
          <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
            <Text>All</Text>
          </Button>
          <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
            <ReactSVG src="./svg/FolderIcon.svg" />
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Header;
