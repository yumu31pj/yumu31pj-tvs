import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  try {
    const response = await db.news.findUnique({
      where: { id: id },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  try {
    const requestBody = await request.json();
    const response = await db.news.update({
      where: { id: id },
      data: {
        title: requestBody.title,
        content: requestBody.content,
        updatedAt: new Date(),
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update news" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  try {
    await db.news.delete({
      where: { id: id },
    });
    return NextResponse.json({ message: "ニュースを削除しました" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "ニュースの削除に失敗しました" }, { status: 500 });
  }
}