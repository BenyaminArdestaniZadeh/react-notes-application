import { Box, Button, Dialog, Flex } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";
import { TrashIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { categoryAtom } from "../../../store/note";
import NewCategory from "./new-category/NewCategory";
import CustomDialog from "../../shared/dialog/CustomDialog";
import CategoryCard from "./category-card/CategoryCard";

const NoteCategories = () => {
  const [categoryItem] = useAtom(categoryAtom);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ReactSVG src="./svg/FolderIcon.svg" />
      </Dialog.Trigger>
      <Dialog.Content
        style={{
          backgroundColor: "#111111",
        }}
      >
        <Flex justify={"between"} align={"center"}>
          <Dialog.Title style={{ color: "whitesmoke" }}>
            Categories
          </Dialog.Title>
          <Button
            color="yellow"
            style={{ width: "50px", height: "40px", cursor: "pointer" }}
          >
            <TrashIcon style={{ width: "25px", height: "25px" }} />
          </Button>
        </Flex>

        <Flex direction={"column"} gap={"3"} mt={"5"}>
          {categoryItem.map((item, index) => (
            <CategoryCard
              key={index}
              title={item.title}
              categoryItemNumbers={item.categoryItemNumbers}
            />
          ))}
        </Flex>
        <CustomDialog
          triger={
            <Box width={"100%"} mt={"4"}>
              <Button
                size={"4"}
                color="yellow"
                variant="outline"
                style={{ width: "100%", cursor: "pointer" }}
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
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default NoteCategories;
