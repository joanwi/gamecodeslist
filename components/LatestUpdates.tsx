import Link from "next/link";
import { fetchLatestUpdates } from "@/lib/data";

export default async function LatestUpdates() {
  const { latestUpdates } = await fetchLatestUpdates();
  return (
    <ul className="space-y-2">
      {latestUpdates.slice(0, 10).map((update, _id) => (
        <li key={_id} className="border-b pb-2">
          <span className="font-bold">{update.update}:</span> Added new codes
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
