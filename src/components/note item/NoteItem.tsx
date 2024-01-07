import { Flex, Heading, Text } from "@radix-ui/themes";
import { LimitText } from "../note.styled";
import { NoteProps } from "../../types/note.types";

const NoteItem = (props: NoteProps) => {
  const { title, bodyText, date } = props;
  // const currentDate = new Date().toString().slice(4, 21);

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
      <Heading size={"7"} style={{ color: "whitesmoke" }}>
        {title}
      </Heading>
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
