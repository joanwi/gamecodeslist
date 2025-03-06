import { Codes, Comment,SiderBarCodes } from "@/lib/types";
import clientPromise from "@/lib/mongodb";
import { sideGames, featuredGames } from "./sideAndFeaturedGames";

const client = await clientPromise;
const db = client.db("gamecodes");

export async function fetchGameData(game: string) {
  const codes = await db
    .collection<Codes>("codes")
    .find({ game: game })
    .toArray();

  const comments = await db
    .collection<Comment>("comments")
    .find({ game: game, status: "1" })
    .map((doc) => ({
      ...doc,
      parent_id: doc.parent_id?.toString() ?? null,
      root_id: doc.root_id?.toString() ?? null,
      _id: doc._id.toString(),
    }))
    .toArray();

  console.log("comments from MongoDB:", comments);

  const commentsSum = comments?.length || 0;

  const activeCodes = codes
    .filter((code) => code.status === "1")
    .sort((a, b) => b.update.localeCompare(a.update));

  const expiredCodes = codes
    .filter((code) => code.status === "2")
    .sort((a, b) => b.update.localeCompare(a.update));

  const lastUpdated = new Date(
    Math.max(
      ...codes.map((code) => new Date(code.update || "2025-02-26").getTime())
    )
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return { activeCodes, expiredCodes, comments, commentsSum, lastUpdated };
}

export async function fetchLatestUpdates() {
  const latestUpdates = await db
    .collection<Codes>("codes")
    .aggregate([
      { $match: { status: "1" } },
      { $sort: { update: -1 } },
      {
        $group: {
          _id: "$game",
          latestDoc: { $first: "$$ROOT" },
        },
      },
      { $replaceRoot: { newRoot: "$latestDoc" } },
      { $sort: { update: -1 } },
    ])
    .toArray();

  console.log("lastcodes from MongoDB:", latestUpdates);

  const siderBarGames = latestUpdates.map((code) => ({
    ...code,
    imageUrl: sideGames.find((img) => img.game === code.game)?.imageUrl || "",
  })) as SiderBarCodes[];

  const newFeaturedGames = latestUpdates.map((code) => ({
    ...code,
    imageUrl:
      featuredGames.find((img) => img.game === code.game)?.imageUrl || "",
  })) as SiderBarCodes[];

  // console.log("siderBarGames iamgeurl:", siderBarGames);

  return { latestUpdates, siderBarGames, newFeaturedGames };
}
