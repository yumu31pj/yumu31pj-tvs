import { NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json()
    const response = await db.news.create({
      data: {
        title: requestBody.title,
        content: requestBody.content,
        updatedAt: new Date()
      }
    });
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to create news' }, { status: 500});
  }
}
