import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, comment, postId } = data;

    // Validation: Ensure all fields are present
    if (!name || !email || !comment || !postId) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Create the new comment in Sanity
    const newComment = await client.create({
      _type: "comment",
      name,
      email,
      comment,
      post: {
        _type: "reference",
        _ref: postId,
      },
    });

    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to create a comment", error: error.message || error },
      { status: 500 }
    );
  }
}
