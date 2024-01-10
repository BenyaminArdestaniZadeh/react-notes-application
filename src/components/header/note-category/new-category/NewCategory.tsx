import { Button, Dialog, Flex, Text } from "@radix-ui/themes";

const NewCategory = ({ dismiss }: { dismiss: () => void }) => {
  return (
    <form>
      <Dialog.Title style={{ color: "whitesmoke" }}>New Category</Dialog.Title>
      <Flex direction={"column"} gap={"3"} mt={"4"}>
        <input placeholder="Enter your category name" className="input-style" />
        <Flex justify={"end"} gap={"2"}>
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
      </Flex>
    </form>
  );
};

export default NewCategory;
