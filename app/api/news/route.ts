import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../libs/db";

export async function GET(request: NextRequest) {
  try {
    // パラメータからlimit=取得件数を取得
    const limit = request.nextUrl.searchParams.get("limit");
    const limitNumber = limit ? parseInt(limit, 10) : undefined;

    const response = await db.news.findMany(
      {
        take: limitNumber,
        orderBy: { updatedAt: 'desc' }
      }
    );
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
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
    return NextResponse.json({ error: 'Failed to create news' }, { status: 500 });
  }
}
