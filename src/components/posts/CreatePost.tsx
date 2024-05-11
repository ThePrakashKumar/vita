"use client";
import { createPost } from "@/actions";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import FormButton from "@/components/common/FormButton";
const CreatePost = ({ slug }: { slug: string }) => {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });

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
          <h3 className="text-lg ">Crate a Post</h3>
          <Input
            name="title"
            label="Title"
            labelPlacement="outside"
            placeholder="title"
            isInvalid={!!formState.errors.title}
            errorMessage={formState.errors.title?.join(", ")}
          />
          <Textarea
            name="content"
            label="Content"
            labelPlacement="outside"
            placeholder="content"
            isInvalid={!!formState.errors.content}
            errorMessage={formState.errors.content?.join(", ")}
          />
          {formState.errors._form && (
            <div className="p-2 rounded bg-red-100 border border-red-400">
              {formState.errors._form.join(", ")}
            </div>
          )}
          <FormButton>Submit</FormButton>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreatePost;
