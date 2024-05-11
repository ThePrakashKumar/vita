import CreatePost from "@/components/posts/CreatePost";
import { db } from "@/db";
import { Divider } from "@nextui-org/react";
import { Topic } from "@prisma/client";

const TopicPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // const topic = await db.topic.findFirst({ where: { slug } });
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">{slug}</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <CreatePost slug={slug} />
        <Divider className="my-2" />
        <h3 className="text-lg">Description</h3>
        {/* <div>{topic?.description}</div> */}
      </div>
    </div>
  );
};
export default TopicPage;
