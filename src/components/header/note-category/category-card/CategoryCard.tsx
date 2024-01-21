import {
  AlertDialog,
  Button,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import { CategoryItemProps } from "../../../../types/note.types";
import { useAtom } from "jotai";
import { noteAtom, selectedNoteIdAtom } from "../../../../store/note";

const CategoryCard = (props: CategoryItemProps) => {
  const { title, categoryItemNumbers, id } = props;
  const [selectedCategoryId, setSelectedCategoryId] =
    useAtom(selectedNoteIdAtom);
  const [noteItem] = useAtom(noteAtom);

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
      <Flex>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button color="yellow" radius="large">
              <Text weight={"bold"} size={"5"}>
                +
              </Text>
            </Button>
          </DropdownMenu.Trigger>
          {noteItem.length === 0 ? (
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="yellow" radius="large">
                  <Text weight={"bold"} size={"5"}>
                    +
                  </Text>
                </Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content style={{ maxWidth: "450px" }}>
                <AlertDialog.Title>Oops!!!</AlertDialog.Title>
                <AlertDialog.Description mb={"4"}>
                  There are currently no notes to add to the category. First you
                  need to create a note
                </AlertDialog.Description>
                <AlertDialog.Action>
                  <Button variant="solid" color="red">
                    Ok
                  </Button>
                </AlertDialog.Action>
              </AlertDialog.Content>
            </AlertDialog.Root>
          ) : (
            <DropdownMenu.Content
              style={{
                minWidth: "10rem",
                backgroundColor: "#1f1f1e",
                border: "1px solid gray",
              }}
            >
              {noteItem &&
                noteItem.map((item) => (
                  <DropdownMenu.Item className="dropdown-item-style">
                    {item.title}
                  </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
          )}
        </DropdownMenu.Root>
        <Text style={{ color: "#a8a8a8" }}>{categoryItemNumbers}</Text>
      </Flex>
    </Flex>
  );
};

export default CategoryCard;

{
  /* {noteItem.length > 0 && (
            <DropdownMenu.Content
              style={{
                minWidth: "10rem",
                backgroundColor: "#1f1f1e",
                border: "1px solid gray",
              }}
            >
              {noteItem &&
                noteItem.map((item) => (
                  <DropdownMenu.Item className="dropdown-item-style">
                    {item.title}
                  </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
          )} */
}
