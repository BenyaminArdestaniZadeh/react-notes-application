import { Flex, Text } from "@radix-ui/themes";
import { CategoryItemProps } from "../../../../types/note.types";

const CategoryCard = (props: CategoryItemProps) => {
  const { title, categoryItemNumbers } = props;
  return (
    <Flex
      width={"100%"}
      justify={"between"}
      align={"center"}
      px={"6"}
      py={"4"}
      style={{ backgroundColor: "#282b30", borderRadius: "4px" }}
    >
      <Flex align={"center"} gap={"5"}>
        <input type="checkbox" />
        <Text style={{ color: "whitesmoke" }}>{title}</Text>
      </Flex>
      <Text style={{ color: "#a8a8a8" }}>{categoryItemNumbers}</Text>
    </Flex>
  );
};

export default CategoryCard;
