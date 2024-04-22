"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import paths from "@/paths";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lower cases or dashes without spaces!",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: [];
    description?: [];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get("name");
  const description = formData.get("description");

  // safeParse will take the data and do the validation check if there is validation error then it will have those error in the returned object
  const result = createTopicSchema.safeParse({
    name,
    description,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors as {
        name?: [];
        description?: [];
      },
    };
  }

  // shoe error when user is not logged in
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be logged in!"],
      },
    };
  }

  // create topic
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        // when zod validation goes right we would get data
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
}
