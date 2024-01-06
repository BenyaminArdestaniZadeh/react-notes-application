import { Flex, Grid, Text } from "@radix-ui/themes";
import Header from "./components/header/Header";
// import Note from "./components/note/Note";
import { CreateNewNoteButton } from "./components/note.styled";
import { useAtom } from "jotai";
import { noteAtom } from "./store/note";
import CreateNote from "./components/note/CreateNote";

function App() {
  const [noteText, setNoteText] = useAtom(noteAtom);
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
        {noteText.map((item) => (
          <CreateNote
            title={item.title}
            bodyText={item.bodyText}
            date={item.date}
          />
        ))}
      </Grid>
      <CreateNewNoteButton size={"4"} color="yellow">
        <Text size={"6"}>+</Text>
      </CreateNewNoteButton>
    </Flex>
  );
}

export default App;
