import { NextResponse } from "next/server";
import { db } from "../../../libs/db";

export async function GET() {
  try {
    const response = await db.news.findMany();
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500});
  }
}