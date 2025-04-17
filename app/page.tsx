import Footer from "@/components/layout/footer";
import ClientsSection from "./components/clients-section";
import QuestionSection from "./components/question-section";
import HeroSection from "./components/hero-section";
import BlogSection from "./components/blog-section";
import { BlogPost } from "@/types";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  let posts: BlogPost[] = [];

  try {
    const res = await fetch(`${protocol}://${host}/api/mock-posts`, {
      cache: "force-cache",
    });

    posts = await res.json();
  } catch (err) {
    console.log("Error fetching blog posts:", err);
    posts = [];
  }

  return (
    <main>
      <HeroSection />
      <BlogSection posts={posts} />
      <ClientsSection />
      <QuestionSection />
      <Footer />
    </main>
  );
}
