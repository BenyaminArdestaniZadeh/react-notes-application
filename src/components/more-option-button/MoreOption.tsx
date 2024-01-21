import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";
import { useAtom } from "jotai";

import { categoryItemAtom, noteAtom } from "../../store/note";

const MoreOption = ({ id }: { id: number }) => {
  const [categoryItem] = useAtom(categoryItemAtom);
  const [noteItem, setNoteItem] = useAtom(noteAtom);

  const handleEditNote = () => {
    return;
  };

  const handleDeleteNoteByDotsButton = () => {
    const deletItem = noteItem.filter((item) => item.id !== id);
    setNoteItem(deletItem);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost" color="yellow">
          <DotsVerticalIcon style={{ width: "30px", height: "30px" }} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        style={{ backgroundColor: "#111111", width: "10rem" }}
      >
        <DropdownMenu.Item color="teal">Pin</DropdownMenu.Item>
        <DropdownMenu.Separator style={{ backgroundColor: "whitesmoke" }} />
        <DropdownMenu.Item
          className="dropdown-item-style"
          onClick={() => handleEditNote()}
        >
          Edite
        </DropdownMenu.Item>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className="dropdown-item-style">
            Move To
          </DropdownMenu.SubTrigger>
          {categoryItem.length !== 0 && (
            <DropdownMenu.SubContent
              style={{
                backgroundColor: "#111111",
                width: "auto",
                border: "1px solid gray",
              }}
            >
              {categoryItem &&
                categoryItem.map((item) => (
                  <DropdownMenu.Item className="dropdown-item-style">
                    {item.title}
                  </DropdownMenu.Item>
                ))}
            </DropdownMenu.SubContent>
          )}
        </DropdownMenu.Sub>

        <DropdownMenu.Separator style={{ backgroundColor: "whitesmoke" }} />
        <DropdownMenu.Item className="dropdown-item-style">
          Hide
        </DropdownMenu.Item>
        <DropdownMenu.Item
          color="red"
          onClick={() => handleDeleteNoteByDotsButton()}
        >
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MoreOption;
