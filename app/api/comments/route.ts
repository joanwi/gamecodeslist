import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const client = await clientPromise;
    const collection = client.db("gamecodes").collection("comments");

    const rawParentId = formData.get("parent_id")?.toString();
    let parentId: ObjectId | null = null;
    let rootId: ObjectId | null = null;

    if (rawParentId) {
      if (!ObjectId.isValid(rawParentId)) {
        return NextResponse.json(
          { error: "Invalid parent comment ID format" },
          { status: 400 }
        );
      }

      parentId = new ObjectId(rawParentId);

      const parentComment = await collection.findOne({
        _id: parentId,
      });

      if (!parentComment) {
        return NextResponse.json(
          { error: "Parent comment not found" },
          { status: 404 }
        );
      }

      rootId = parentComment.root_id
        ? parentComment.root_id
        : parentComment._id;
    }

    const comment = {
      game: formData.get("game"),
      user_name: formData.get("user_name"),
      content: formData.get("content"),
      status: "2",
      created_at: new Date(),
      parent_id: parentId,
      root_id: rootId,
    };

    const result = await collection.insertOne(comment);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

