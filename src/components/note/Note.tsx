import { Flex, Heading, Text } from "@radix-ui/themes";

const Note = () => {
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
        Golabi
      </Heading>
      <Text size={"4"}>akjjjjjsdae</Text>
      <Flex justify={"end"}>
        <Text size={"2"}>yeeeeeeeees</Text>
      </Flex>
    </Flex>
  );
};

export default Note;
