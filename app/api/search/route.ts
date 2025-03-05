import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim() || "";

  try {
    const client = await clientPromise;
    const collection = client.db("gamecodes").collection("gamelist");

    const results = await collection
      .find({
        game: { 
          $regex: query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 
          $options: 'i' 
        }
      })
      .project({ _id: 0, game: 1, url: 1 })
      .limit(10)
      .toArray();

    return NextResponse.json(results);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}