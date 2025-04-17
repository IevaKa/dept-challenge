import React from "react";
import BlogPostCard from "./blog-post-card";
import { BlogPost } from "@/types";
import BlogPostListing from "./blog-post-listing";
import { chunkArray } from "@/utils";
import Testimonial from "./testimonial";

const BlogCardsList = ({
  posts,
  colSpan = "col-span-3",
}: {
  posts: BlogPost[];
  colSpan?: string;
}) => {
  if (!posts.filter(Boolean).length) return null;

  return (
    <div className="contents">
      {posts.map((post, idx) => (
        <div
          key={idx}
          className={`flex justify-center items-center ${colSpan}`}
        >
          <BlogPostCard post={post} />
        </div>
      ))}
    </div>
  );
};

const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  if (!posts.length) return null;

  return (
    <div className="col-span-2 p-8">
      {posts.map((post, idx) => (
        <BlogPostListing
          key={idx}
          post={post}
          withBorder={!(posts.length === idx + 1)}
        />
      ))}
    </div>
  );
};

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  const chunks = chunkArray(posts, 18);

  return (
    <>
      {chunks.map((chunk, i) => (
        <React.Fragment key={i}>
          <div className="grid grid-cols-1 lg:grid-cols-6 auto-rows-[568px]">
            <BlogCardsList posts={chunk.slice(0, 4)} />
            <BlogCardsList posts={[chunk[4]]} colSpan="col-span-4" />
            <BlogList posts={chunk.slice(5, 8)} />
            <BlogCardsList posts={chunk.slice(8, 10)} />
            <BlogList posts={chunk.slice(10, 13)} />
            <BlogCardsList posts={[chunk[13]]} colSpan="col-span-4" />
            <BlogCardsList posts={chunk.slice(14, 18)} />
          </div>
          {chunk.length === 18 && <Testimonial />}
        </React.Fragment>
      ))}
    </>
  );
}
