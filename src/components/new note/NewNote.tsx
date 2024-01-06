import { Button, Dialog, Flex, Text, TextArea } from "@radix-ui/themes";
import { CreateNewNoteButton } from "../note.styled";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { NoteProps } from "../../types/note.types";
import { useAtom } from "jotai";
import { noteAtom } from "../../store/note";

const NewNote = () => {
  const [noteText, setNoteText] = useAtom(noteAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteProps>();

  const onSubmit = () => {
    const AddItemToNote: NoteProps = {};
    setNoteText([...noteText, AddItemToNote]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog.Root>
        <Dialog.Trigger>
          <CreateNewNoteButton size={"4"} color="yellow">
            <Text size={"6"}>+</Text>
          </CreateNewNoteButton>
        </Dialog.Trigger>
        <Dialog.Content style={{ backgroundColor: "#282b30" }}>
          <Flex direction={"column"} gap={"3"}>
            <Dialog.Title style={{ color: "whitesmoke" }}>
              <input
                {...register("title", {
                  required: true,
                })}
                defaultValue={""}
                placeholder="Title"
                className="input-style"
              />
            </Dialog.Title>
            <TextAreaWrapper
              {...register("bodyText", {
                required: "This field is mandatory",
              })}
              size={"3"}
              variant="soft"
              defaultValue={""}
              placeholder="Start typing..."
            />
            {errors.bodyText?.message && (
              <Text as="label" color="tomato">
                {errors.bodyText.message}
              </Text>
            )}
            <Text as="label" color="tomato"></Text>
          </Flex>
          <Flex width={"auto"} gap={"3"} mt={"4"} justify={"end"}>
            <Dialog.Close>
              <Button size={"3"} color="gray" style={{ cursor: "pointer" }}>
                <Text>Cancle</Text>
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size={"3"} color="yellow" style={{ cursor: "pointer" }}>
                <Text>Save</Text>
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </form>
  );
};

export default NewNote;

const TextAreaWrapper = styled(TextArea)`
  .rt-TextAreaInput {
    outline: none;
    color: #c5c5c5;
    background-color: #282b30;
    font-size: 14px;
  }
  ::placeholder {
    color: #ffffff;
  }
`;
