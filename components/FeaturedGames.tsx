import Image from "next/image";
import Link from "next/link";
import { fetchLatestUpdates } from "@/lib/data";

export default async function FeaturedGames() {
  const { newFeaturedGames } = await fetchLatestUpdates();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {newFeaturedGames.map((game) => (
        <div
          key={game._id}
          className="border p-4 rounded shadow hover:shadow-lg transition">
          <div className="w-full h-48 relative">
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
          <h3 className="text-xl font-bold mt-2">{game.game}</h3>
          <p className="text-gray-600">Latest Code:</p>
          <p className="text-gray-600">{game.code}</p>
          <div className=" text-primary mt-2">
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
