import { createTopic } from "@/actions";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Textarea,
} from "@nextui-org/react";

const CreateTopic = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          className="flex gap-4 py-2 flex-col align-center"
          action={createTopic}
        >
          <h3 className="text-lg ">Crate a Topic</h3>
          <Input
            name="name"
            label="Topic"
            labelPlacement="outside"
            placeholder="name"
          />
          <Textarea
            name="description"
            label="Description"
            labelPlacement="outside"
            placeholder="description"
          />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopic;
