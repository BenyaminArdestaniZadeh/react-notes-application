import { Dialog } from "@radix-ui/themes";
import { ReactNode, useState } from "react";

const CustomDialog = ({
  triger,
  content,
  backgroundColor,
  boxShadow,
  maxWidth,
}: {
  triger: ReactNode;
  content: (dismiss: () => void) => ReactNode;
  backgroundColor?: string;
  boxShadow?: string;
  maxWidth?: "50rem" | string;
}) => {
  const [open, setOpen] = useState(false);
  const dismiss = () => setOpen(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{triger}</Dialog.Trigger>
      <Dialog.Content
        style={{
          backgroundColor: backgroundColor,
          boxShadow: boxShadow,
          maxWidth: maxWidth,
        }}
      >
        {content(dismiss)}
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
