"use client";
import { createTopic } from "@/actions";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";

const CreateTopic = () => {
  const [formState, action] = useFormState(createTopic, { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          className="flex gap-4 py-2 w-80 flex-col align-center"
          action={action}
        >
          <h3 className="text-lg ">Crate a Topic</h3>
          <Input
            name="name"
            label="Topic"
            labelPlacement="outside"
            placeholder="name"
            isInvalid={!!formState.errors.name}
            errorMessage={formState.errors.name?.join(", ")}
          />
          <Textarea
            name="description"
            label="Description"
            labelPlacement="outside"
            placeholder="description"
            isInvalid={!!formState.errors.description}
            errorMessage={formState.errors.description?.join(", ")}
          />
          {formState.errors._form && (
            <div className="p-2 rounded bg-red-100 border border-red-400">
              {formState.errors._form.join(", ")}
            </div>
          )}
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopic;
