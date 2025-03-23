import { db } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const existingAccount = await db.account.findUnique({
      where: { email },
    });

    return NextResponse.json({ exists: !!existingAccount });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to check email' }, { status: 500 });
  }
}