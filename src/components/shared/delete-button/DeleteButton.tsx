import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useAtom } from "jotai";
import { noteAtom, selectedNoteIdAtom } from "../../../store/note";

const DeleteButton = () => {
  const [noteItem, setNoteItem] = useAtom(noteAtom);
  const [selectedItem, setSelectedItem] = useAtom(selectedNoteIdAtom);

  const handleDeleteNote = () => {
    if (selectedItem.length !== 0) {
      const deleteItem = noteItem.filter(
        (item) => !selectedItem.includes(item.id)
      );
      console.log("delete goh", deleteItem);
      setNoteItem(deleteItem);
      setSelectedItem([]);
    } else {
      console.log("dont Selected", selectedItem);
    }
  };

  return (
    <Button
      color="yellow"
      style={{ width: "50px", height: "40px", cursor: "pointer" }}
      onClick={() => handleDeleteNote()}
      //   type="submit"
    >
      <TrashIcon style={{ width: "25px", height: "25px" }} />
    </Button>
  );
};

export default DeleteButton;
