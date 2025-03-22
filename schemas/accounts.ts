import * as z from 'zod';

export const AccountsRegisterSchema = z.object({
  name: z.string().min(1, {
    message: '名前を入力して下さい',
  }),
  email: z.string().email({
    message: '正しいメールアドレスを入力して下さい',
  }),
  password: z.string().min(8, {
    message: 'パスワードは8文字以上で入力して下さい',
  }),
  passwordConfirmation: z.string().min(8, {
    message: 'パスワードは8文字以上で入力して下さい',
  })
  // role: z.string().min(1, {
  //   message: '権限を選択して下さい',
  // }),
  // status: z.string().min(1, {
  //   message: 'ステータスを選択して下さい',
  // }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: 'パスワードが一致しません',
  path: ['passwordConfirmation'],
});