import React from "react";
import BlogPostCard from "./blog-post-card";
import { BlogPost } from "@/types";
import BlogPostListing from "./blog-post-listing";
import Testimonial from "./testimonial";
import { chunkArray } from "@/utils";

const BlogCards = ({ posts }: { posts: BlogPost[] }) => {
  if (!posts.length) return null;

  return (
    <div className="col-span-2 p-8">
      {posts.map((post, idx) => (
        <BlogPostListing
          key={idx}
          post={post}
          withBorder={idx !== posts.length - 1}
        />
      ))}
    </div>
  );
};

const BlogList = ({
  posts,
  colSpan = 3,
}: {
  posts: BlogPost[];
  colSpan?: number;
}) => {
  if (!posts.length) return null;

  return (
    <>
      {posts.map((post, idx) => (
        <div
          key={idx}
          className={`flex justify-center items-center col-span-${colSpan}`}
        >
          <BlogPostCard post={post} />
        </div>
      ))}
    </>
  );
};

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  const chunks = chunkArray(posts, 18);

  return (
    <>
      {chunks.map((chunk, i) => (
        <React.Fragment key={i}>
          <div className="grid grid-cols-1 lg:grid-cols-6 auto-rows-[568px]">
            <BlogList posts={chunk.slice(0, 4)} />
            <BlogList posts={chunk.slice(4, 5)} colSpan={4} />
            <BlogCards posts={chunk.slice(5, 8)} />
            <BlogList posts={chunk.slice(8, 10)} />
            <BlogCards posts={chunk.slice(10, 13)} />
            <BlogList posts={chunk.slice(13, 14)} colSpan={4} />
            <BlogList posts={chunk.slice(14, 18)} />
          </div>
          {chunk.length === 18 && <Testimonial />}
        </React.Fragment>
      ))}
    </>
  );
}
