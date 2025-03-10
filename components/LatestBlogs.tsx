import Link from "next/link";
import { latestBlogs } from "@/lib/blogs";

export default function LatestBlogs() {

  return (
    <ul className="space-y-2">
      {latestBlogs.slice(0, 10).map((blog, id) => (
        <li key={id} className="border-b pb-2">
          <span className="font-bold">{blog.date}:</span> Added new blog
          for{" "}
          <Link
            href={blog.url}
            className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">
            {blog.game}.
          </Link>
        </li>
      ))}
    </ul>
  );
}
