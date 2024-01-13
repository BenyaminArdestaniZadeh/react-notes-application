import { Dialog } from "@radix-ui/themes";
import { ReactNode, useState } from "react";

const CustomDialog = ({
  triger,
  content,
  backgroundColor,
  boxShadow,
  maxWidth,
  height,
  maxHeight,
}: {
  triger: ReactNode;
  content: (dismiss: () => void) => ReactNode;
  backgroundColor?: string;
  boxShadow?: string;
  maxWidth?: "50rem" | string;
  height?: string;
  maxHeight?: string;
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
          height: height,
          maxHeight: maxHeight,
        }}
      >
        {content(dismiss)}
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
