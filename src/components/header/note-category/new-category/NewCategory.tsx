import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { useForm, SubmitHandler } from "react-hook-form";
import { CategoryItemProps } from "../../../../types/note.types";
import { useAtom } from "jotai";
import { categoryItemAtom } from "../../../../store/note";

const NewCategory = ({ dismiss }: { dismiss: () => void }) => {
  const [categoryCardItems, setCategoryCardItem] = useAtom(categoryItemAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryItemProps>();

  const submitNewCategory: SubmitHandler<CategoryItemProps> = (item) => {
    if (item.title.trim() !== "") {
      const newCategoryCard = {
        title: item.title,
        number: categoryCardItems.length + 1,
        id: categoryCardItems.length + 1,
      };
      setCategoryCardItem([...categoryCardItems, newCategoryCard]);
    }
    dismiss();
  };

  return (
    <form onSubmit={handleSubmit(submitNewCategory)}>
      <Dialog.Title style={{ color: "whitesmoke" }}>New Category</Dialog.Title>
      <Flex direction={"column"} gap={"3"} mt={"4"}>
        <input
          {...register("title", {
            required: "You have to type something",
          })}
          placeholder="Enter your category name"
          className="input-style"
          onChange={(e) => e.target.value}
        />
        {errors.title?.message && (
          <Text as="label" color="tomato">
            {errors.title.message}
          </Text>
        )}
        <Flex justify={"end"} gap={"2"} mt={"9"}>
          <Dialog.Close>
            <Button type="button" size={"3"} color="gray">
              <Text>Cancle</Text>
            </Button>
          </Dialog.Close>
          <Button type="submit" size={"3"} color="yellow">
            <Text>Save</Text>
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default NewCategory;
