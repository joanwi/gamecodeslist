import Sidebar from "@/components/Sidebar";
import BlogPageList from "@/components/BlogPageList";
import { latestBlogs } from "@/lib/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | GameCodesList",
  description:
    "Discover the latest game codes, cheats, and tips! The blogs brings you redeemable codes, tricks, and updates for popular games to enhance your gaming experience.",
  alternates: {
    canonical: "https://gamecodeslist.com/blogs",
  },
};

const newBlogs = latestBlogs.map((blog) => ({
  ...blog,
  date: new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
}));

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <main className="md:w-3/4 md:pr-8">
        <div className="article-container">
          <h1>Blogs</h1>

          <BlogPageList blogs={newBlogs} />
        </div>
      </main>

      {/* Sidebar */}
      <aside className="md:w-1/4 mt-8 md:mt-0">
        <Sidebar />
      </aside>
    </div>
  );
}
