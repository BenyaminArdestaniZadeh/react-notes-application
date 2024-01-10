import { Flex, Text } from "@radix-ui/themes";
import { CategoryItemProps } from "../../../../types/note.types";

const CategoryItemWrapper = (props: CategoryItemProps) => {
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
      <Text style={{ color: "whitesmoke" }}>{title} sdsa</Text>
      <Text style={{ color: "#a8a8a8" }}>{categoryItemNumbers}asdsa </Text>
    </Flex>
  );
};

export default CategoryItemWrapper;
