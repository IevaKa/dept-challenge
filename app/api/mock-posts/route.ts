import { NextResponse } from "next/server";
import mockPosts from "./data";

export async function GET() {
  return NextResponse.json(mockPosts);
}
