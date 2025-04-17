import { BlogPost } from "@/types";
import Image from "next/image";
import ReadMoreButton from "./read-more-button";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  const { title, company, image = "" } = post;
  return (
    <div className="relative w-full h-full flex p-8 items-end">
      <div className="z-5">
        <div className="pb-4 uppercase">{company} </div>
        <h2 className="text-[26px] md:text-[48px]">{title}</h2>
        <ReadMoreButton />
      </div>
      <Image
        src={image}
        alt={image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover z-0"
        loading="lazy"
      />
    </div>
  );
}
