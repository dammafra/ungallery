import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { FaTrash } from "react-icons/fa6";

export interface CommentDeleteButtonProps {
  onConfirm: () => void;
}

export const CommentDeleteButton = ({
  onConfirm,
}: CommentDeleteButtonProps) => {
  return (
    <Popover placement="top-end" color="danger" backdrop="blur">
      <PopoverTrigger>
        <Button
          size="sm"
          isIconOnly
          color="danger"
          variant="light"
          className="group"
          startContent={<FaTrash />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex gap-2 items-center">
          <div className="text-tiny px-1 py-2">
            <p>Are you sure you want to delete this comment?</p>
          </div>
          <Button
            size="sm"
            variant="solid"
            color="danger"
            className="border border-white"
            onPress={onConfirm}
          >
            Yes
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
