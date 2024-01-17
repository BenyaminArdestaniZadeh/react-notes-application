import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { LimitText } from "../note.styled";
import { NoteProps } from "../../types/note.types";
import { Pencil1Icon } from "@radix-ui/react-icons";
import CustomDialog from "../shared/dialog/CustomDialog";
import NoteContent from "../shared/note-content/NoteContent";
import { useAtom } from "jotai";
import { selectedNoteIdAtom } from "../../store/note";

const NoteItem = (props: NoteProps) => {
  const { title, bodyText, date, id } = props;
  const [selectedItem, setSelectedItem] = useAtom(selectedNoteIdAtom);
  console.log("false==>", selectedItem);

  const handleDeleteNote = () => {
    // in this condition , the selected Item will be checked to return its ID so that we can delete it by delete button
    if (!selectedItem.includes(id)) {
      setSelectedItem([...selectedItem, id]);
    } else {
      const removeItemFromArray = selectedItem.filter((item) => item !== id);
      setSelectedItem(removeItemFromArray);
    }
  };

  return (
    <Flex
      direction={"column"}
      gap={"2"}
      p={"4"}
      style={{
        backgroundColor: "#282b30",
        boxShadow: "1px 2px 6px 1px #797979",
        borderRadius: "12px",
      }}
    >
      <Flex width={"100%"} justify={"between"} align={"center"}>
        <Flex align={"center"} gap={"3"} style={{ width: "75%" }}>
          <input type="checkbox" onChange={() => handleDeleteNote()} />
          <Heading size={"5"} style={{ color: "whitesmoke" }}>
            {title}
          </Heading>
        </Flex>
        <CustomDialog
          triger={
            <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
              <Pencil1Icon style={{ width: "25px", height: "25px" }} />
            </Button>
          }
          content={(dismiss) => <NoteContent type="edit" dismiss={dismiss} />}
          backgroundColor="#282b30"
        />
      </Flex>

      <LimitText size={"4"} style={{ color: "#d3d3d3" }} lineNumber={3}>
        {bodyText}
      </LimitText>
      <Flex justify={"end"}>
        <Text size={"2"} style={{ color: "#a8a8a8" }}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NoteItem;
