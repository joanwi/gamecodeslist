import Image from "next/image";
import Link from "next/link";
import { fetchLatestUpdates } from "@/lib/data";

export default async function Sidebar() {
  const { siderBarGames } = await fetchLatestUpdates();

  const sortedGames = siderBarGames.slice(0, 5);

  return (
    <div className="grid grid-cols-1 gap-3 max-w-[280px]">
      <h2 className="text-xl font-bold mx-auto mb-1">Latest Updates</h2>
      {sortedGames.map((game) => (
        <div
          key={game._id}
          className="border p-3 rounded shadow hover:shadow-lg transition max-w-[260px] mx-auto">
          <div className="w-full h-32 relative">
            <Link href={game.url}>
              <Image
                src={game.imageUrl}
                alt={`${game.game} Codes`}
                fill
                className="object-cover rounded"
                sizes="100vw"
              />
            </Link>
          </div>
          <h3 className="text-lg font-bold mt-1 truncate">{game.game}</h3>
          <p className="text-sm text-gray-600">
            Last updated: {game.update}
          </p>
          <div className="text-xs text-primary mt-2">
            <Link
              href={game.url}
              className="text-blue-500 rounded-md border border-gray-300 p-1 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800">
              View All Codes
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
