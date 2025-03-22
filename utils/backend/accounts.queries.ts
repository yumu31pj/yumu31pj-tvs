'use server';

// export const createAccount = async (name: string, email: string, password: string) => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, password }),
//   });
//   if (!response.ok) {
//     throw new Error("アカウントの作成に失敗しました")
//   }
//   return response.json();
// }

import { AccountsRegisterSchema } from "@/schemas/accounts";
import bcrypt from "bcryptjs";
import * as z from 'zod';

export const createAccount = async (values: z.infer<typeof AccountsRegisterSchema>) => {
  const validation = AccountsRegisterSchema.safeParse(values);

  if (!!validation.error) {
    return {error: '入力内容を確認してください'};
  }

  // パスワードをハッシュ化
      const hashedPassword = await bcrypt.hash(values.password, 10);

  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      name: values.name, 
      email: values.email,
      password: hashedPassword
    }),
  });
  if (!response.ok) {
    throw new Error("アカウントの作成に失敗しました")
  }
  return response.json();
}