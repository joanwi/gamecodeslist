import Image from "next/image";
import Link from "next/link";
import { BlogList } from "@/lib/types";

interface BlogHeaderProps {
  blogs: BlogList[];
}

export default function BlogPageList({ blogs }: BlogHeaderProps) {
  return (
    <div className="mb-8">
      {blogs.map((blog, id) => (
        <div key={id} className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="flex-1">
            <h2>
              <Link href={blog.url}>{blog.title}</Link>
            </h2>
            <p>{blog.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{blog.date}</span>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-full md:w-1/3 md:max-w-[300px]">
            <Link href={blog.url}>
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md object-cover"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
