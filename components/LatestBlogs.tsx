import Link from "next/link";

export const blogs = [
  {
    id: 2,
    game: "Genshin Impact: Furina",
    update: "2025-03-09",
    url: "/blogs/guide-and-builds-for-genshin-impact-furina",
  },
  {
    id: 1,
    game: "Fragpunk Crosshairs",
    update: "2025-03-07",
    url: "/blogs/fragpunk-crosshairs-enhancing-precision-in-gaming",
  },
];

export default function LatestBlogs() {

  return (
    <ul className="space-y-2">
      {blogs.slice(0, 10).map((update, id) => (
        <li key={id} className="border-b pb-2">
          <span className="font-bold">{update.update}:</span> Added new blog
          for{" "}
          <Link
            href={update.url}
            className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">
            {update.game}.
          </Link>
        </li>
      ))}
    </ul>
  );
}
