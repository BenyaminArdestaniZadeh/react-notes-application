//wrapper for categories , show this section as a dialog for show , create and delete categories
import { Box, Button, Dialog, Flex, ScrollArea } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { categoryItemAtom, selectedNoteIdAtom } from "../../../store/note";
import NewCategory from "./new-category/NewCategory";
import CustomDialog from "../../shared/dialog/CustomDialog";
import CategoryCard from "./category-card/CategoryCard";

type NoteCategoriesProps = {
  dismiss: () => void;
};

const NoteCategories = (props: NoteCategoriesProps) => {
  const { dismiss } = props;
  const [categoryItem, setCategoryItem] = useAtom(categoryItemAtom);
  const [selectedCategoryId, setSelectedCategoryId] =
    useAtom(selectedNoteIdAtom);

  const handleCategorySelectedId = () => {
    if (selectedCategoryId.length !== 0) {
      const deleteCategory = categoryItem.filter(
        (item) => !selectedCategoryId.includes(item.id)
      );
      setCategoryItem(deleteCategory);
      console.log(deleteCategory);
      setSelectedCategoryId([]);
    }
    dismiss();
  };
  return (
    <Flex direction={"column"}>
      <Flex justify={"between"} align={"center"}>
        <Dialog.Title style={{ color: "whitesmoke" }}>Categories</Dialog.Title>
        <Button
          color="yellow"
          style={{ width: "50px", height: "40px" }}
          onClick={() => handleCategorySelectedId()}
        >
          <TrashIcon style={{ width: "25px", height: "25px" }} />
        </Button>
      </Flex>

      <ScrollArea
        type="always"
        scrollbars="vertical"
        size={"2"}
        style={{ maxHeight: "350px" }}
      >
        <Flex direction={"column"} gap={"3"} mt={"5"} style={{ width: "95%" }}>
          {categoryItem.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              categoryItemNumbers={item.categoryItemNumbers}
              id={item.id}
            />
          ))}
        </Flex>
      </ScrollArea>

      <CustomDialog
        triger={
          <Box width={"100%"} mt={"4"} style={{ textAlign: "center" }}>
            <Button
              size={"4"}
              color="yellow"
              variant="outline"
              style={{ width: "90%" }}
            >
              Create New Category
            </Button>
          </Box>
        }
        content={(dismiss) => <NewCategory dismiss={dismiss} />}
        backgroundColor="#0e0e0e"
        boxShadow="1px 1px 4px 1px #f8f7f0"
        maxWidth="30rem"
      />
    </Flex>
  );
};

export default NoteCategories;
