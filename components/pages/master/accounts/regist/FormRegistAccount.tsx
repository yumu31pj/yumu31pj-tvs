'use client';

import { AccountsRegisterSchema } from "@/schemas/accounts";
import { checkEmailExists, createAccount } from "@/utils/backend/accounts.queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

export const FormRegistAccount = () => {
  const [emailError, setEmailError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof AccountsRegisterSchema>>({
    resolver: zodResolver(AccountsRegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  const onSubmitHandler = async (values: z.infer<typeof AccountsRegisterSchema>) => {
    try {
      const isEmailExists = await checkEmailExists(values.email);
      if (isEmailExists) {
        setEmailError('メールアドレスは既に登録されています' );
        return;
      }
      const response = await createAccount(values);
      console.log('アカウントを作成しました', JSON.stringify(response));
    } catch (error) {
      console.error('アカウントの作成に失敗しました', error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label htmlFor="name">名前</label>
        <input type="text" {...register('name')} placeholder="名前を入力してください" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input type="email" {...register('email')} placeholder="メールアドレスを入力して下さい" />
        {errors.email && <p>{errors.email.message}</p>}
        {emailError && <p>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input type="password" {...register('password')} placeholder="パスワードを入力してください" />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="passwordConfirm">パスワード（確認）</label>
        <input type="password" {...register('passwordConfirmation')} placeholder="もう一度パスワードを入力してください" />
        {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
      </div>
      <button type="submit">登録</button> 
    </form>
  )
}