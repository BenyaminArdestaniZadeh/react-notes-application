import { Button, Dialog, Flex, Text, TextArea } from "@radix-ui/themes";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { NoteProps } from "../../../types/note.types";
import { useAtom } from "jotai";
import { noteAtom } from "../../../store/note";
// import { useState } from "react";

type NoteContentProps = {
  dismiss: () => void;
  type: "create" | "edit";
  id?: number;
  category?: string;
};

const NoteContent = (props: NoteContentProps) => {
  const { dismiss, type } = props;
  const [noteItem, setNoteItem] = useAtom(noteAtom);
  // const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteProps>();

  const currentDate = new Date().toString().slice(4, 21);
  // const getId = noteItem.map((item, index) => (item.id = index + 1));
  // console.log("GET ID=====>", getId);

  const onSubmit: SubmitHandler<NoteProps> = (item: NoteProps) => {
    if (item.bodyText.trim() !== "" && item.title?.trim() !== "") {
      const AddItemToNote = {
        title: item.title,
        bodyText: item.bodyText,
        date: currentDate,
        id: noteItem.length + 1,
      };

      if (type === "create") {
        setNoteItem([...noteItem, AddItemToNote]);
      } else {
        const noteFiltering = noteItem.filter(
          (item, index) => noteItem.indexOf(item) === index
        );
        console.log("edite", noteFiltering);
      }
    }
    dismiss();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={"column"} gap={"3"}>
        <Dialog.Title style={{ color: "whitesmoke" }}>
          <Flex direction={"column"} gap={"2"} px={"4"} py={"2"}>
            <input
              {...register("title", {
                required: true,
              })}
              defaultValue={""}
              placeholder="Title"
              className="input-style"
            />
            <Text
              as="label"
              size={"3"}
              weight={"light"}
              style={{ color: "#9f9ffc" }}
            >
              {currentDate}
            </Text>
          </Flex>
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
      </Flex>
      <Flex width={"auto"} gap={"3"} mt={"4"} justify={"end"}>
        <Dialog.Close>
          <Button
            type="button"
            size={"3"}
            color="gray"
            style={{ cursor: "pointer" }}
          >
            <Text>Cancle</Text>
          </Button>
        </Dialog.Close>
        <Button
          type="submit"
          size={"3"}
          color="yellow"
          style={{ cursor: "pointer" }}
        >
          <Text>Save</Text>
        </Button>
      </Flex>
    </form>
  );
};

export default NoteContent;

const TextAreaWrapper = styled(TextArea)`
  .rt-TextAreaInput {
    outline: none;
    color: #c5c5c5;
    background-color: #282b30;
    font-size: 17px;
  }
  ::placeholder {
    color: #ffffff;
  }
`;

// const getCurrentDate = () => {
//     let currentDate = new Date().toString().slice(0, 21);
//     let day = currentDate.slice(0, 3);
//     let date = currentDate.slice(4, 15);
//     let time = currentDate.slice(16, 22);
//     const reFormatCurrentDate = `${day}-${date}-${time}`;
//     return reFormatCurrentDate;
//   };
