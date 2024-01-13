import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { LimitText } from "../note.styled";
import { NoteProps } from "../../types/note.types";
import { Pencil1Icon } from "@radix-ui/react-icons";
import CustomDialog from "../shared/dialog/CustomDialog";
import NewNoteContent from "../note-content/NoteContent";

const NoteItem = (props: NoteProps) => {
  const { title, bodyText, date } = props;

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
        <Heading size={"7"} style={{ color: "whitesmoke" }}>
          {title}
        </Heading>
        <CustomDialog
          triger={
            <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
              <Pencil1Icon style={{ width: "25px", height: "25px" }} />
            </Button>
          }
          content={(dismiss) => <NewNoteContent dismiss={dismiss} />}
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
