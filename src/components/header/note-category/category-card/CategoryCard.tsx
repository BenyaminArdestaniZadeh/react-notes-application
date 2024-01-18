import { Flex, Text } from "@radix-ui/themes";
import { CategoryItemProps } from "../../../../types/note.types";
import { useAtom } from "jotai";
import { selectedNoteIdAtom } from "../../../../store/note";

const CategoryCard = (props: CategoryItemProps) => {
  const { title, categoryItemNumbers, id } = props;
  const [selectedCategoryId, setSelectedCategoryId] =
    useAtom(selectedNoteIdAtom);

  console.log("checkbox id", selectedCategoryId);

  const handleSelectedCategory = () => {
    if (!selectedCategoryId.includes(id)) {
      setSelectedCategoryId([...selectedCategoryId, id]);
    } else {
      const removeItem = selectedCategoryId.filter((item) => item !== id);
      setSelectedCategoryId(removeItem);
    }
  };
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
        <input type="checkbox" onChange={() => handleSelectedCategory()} />
        <Text style={{ color: "whitesmoke" }}>{title}</Text>
      </Flex>
      <Text style={{ color: "#a8a8a8" }}>{categoryItemNumbers}</Text>
    </Flex>
  );
};

export default CategoryCard;
