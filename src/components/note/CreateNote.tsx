import { Flex, Heading, Text } from "@radix-ui/themes";
import { NoteProps } from "../../types/note.types";

const CreateNote = (props: NoteProps) => {
  const { title, bodyText, date } = props;

  return (
    <Flex
      direction={"column"}
      gap={"2"}
      p={"4"}
      style={{
        backgroundColor: "#555863",
        boxShadow: "1px 2px 6px 1px #5a5a5a",
        borderRadius: "12px",
      }}
    >
      <Heading size={"7"} style={{ color: "whitesmoke" }}>
        {title}
      </Heading>
      <Text size={"4"} style={{ color: "#d3d3d3" }}>
        {bodyText}
      </Text>
      <Flex justify={"end"}>
        <Text size={"2"} style={{ color: "#141414" }}>
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CreateNote;
