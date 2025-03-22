import { db } from "@/libs/db";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json()
    
    const response = await db.account.create({
      data: {
        name: requestBody.name,
        email: requestBody.email,
        password: requestBody.password, 
      }
    });
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json({ error: 'メールアドレスが既に登録されています' }, { status: 400 });
      }
    }
    console.error(error);
    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 });
  }
}