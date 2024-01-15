import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useAtom } from "jotai";
import { noteAtom } from "../../store/note";

const DeleteButton = () => {
  const [noteItem, setNoteItem] = useAtom(noteAtom);

  const handleDeleteNote = () => {
    const selectedNote = noteItem.filter((_, index) => index !== id);
    setNoteItem(selectedNote);
    console.log(selectedNote);
  };

  return (
    <Button
      color="yellow"
      style={{ width: "50px", height: "40px", cursor: "pointer" }}
      onClick={() => handleDeleteNote()}
    >
      <TrashIcon style={{ width: "25px", height: "25px" }} />
    </Button>
  );
};

export default DeleteButton;
