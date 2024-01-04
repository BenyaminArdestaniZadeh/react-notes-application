import { Flex, Grid, Text } from "@radix-ui/themes";
import Header from "./components/header/Header";
import Note from "./components/note/Note";
import { CreateNewNoteButton } from "./components/note.styled";

function App() {
  return (
    <Flex
      width={"100%"}
      direction={"column"}
      p={"6"}
      gap={"4"}
      position={"relative"}
    >
      <Header />
      <Grid columns={"3"} gap={"3"} flow={"row"}>
        <Note />
        <Note />
        <Note />
        <Note />
      </Grid>
      <CreateNewNoteButton size={"4"} color="yellow">
        <Text size={"6"}>+</Text>
      </CreateNewNoteButton>
    </Flex>
  );
}

export default App;
