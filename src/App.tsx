//firs use react hook form to save the user's data
//second save the react hook form output as object to use that for pass the atom
//third use atom and show user's input in note
import { Flex, Grid, Text } from "@radix-ui/themes";
import Header from "./components/header/Header";
import { useAtom } from "jotai";
import { noteAtom } from "./store/note";
import NoteItem from "./components/note item/NoteItem";
import CustomDialog from "./components/shared/dialog/CustomDialog";
import { CreateNewNoteButton } from "./components/note.styled";
import UseNoteContent from "./components/shared/note-content/UseNoteContent";

function App() {
  const [noteItem] = useAtom(noteAtom);

  return (
    <Flex
      width={"100%"}
      direction={"column"}
      p={"6"}
      gap={"4"}
      position={"relative"}
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <Grid width={"100%"} columns={"3"} gap={"5"} flow={"row"}>
        {noteItem?.map((item) => (
          <NoteItem
            key={item.id}
            title={item.title}
            bodyText={item.bodyText}
            date={item.date}
            id={item.id}
          />
        ))}
      </Grid>
      <CustomDialog
        triger={
          <CreateNewNoteButton size={"4"} color="yellow">
            <Text size={"6"}>+</Text>
          </CreateNewNoteButton>
        }
        content={(dismiss) => (
          <UseNoteContent type="create" dismiss={dismiss} />
        )}
        backgroundColor="#282b30"
      />
    </Flex>
  );
}

export default App;
