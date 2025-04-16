import { BlogPost } from "@/types";
import ReadMoreButton from "./read-more-button";

type Props = {
  withBorder?: boolean;
  post: BlogPost;
};

export default function BlogPostListing({ post, withBorder = true }: Props) {
  const className = withBorder ? "border-b border-gray-600 mb-7 pb-7" : "";
  return (
    <div className={className}>
      <p className="pb-2 uppercase">{post.company}</p>
      <h3 className="pb-3 text-sm">{post?.title} </h3>
      <ReadMoreButton />
    </div>
  );
}
