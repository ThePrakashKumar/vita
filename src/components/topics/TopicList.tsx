import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import paths from "@/paths";

const TopicList = async () => {
  const topics = await db.topic.findMany();
  const renderedTopicList = topics.map((topic) => (
    <Link href={paths.topicShow(topic.slug)}>
      <Chip color="default" variant="shadow">
        {topic.slug}
      </Chip>
    </Link>
  ));
  return (
    <div className="flex flex-row flex-wrap gap-2">{renderedTopicList}</div>
  );
};

export default TopicList;
