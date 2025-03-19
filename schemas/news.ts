import * as z from 'zod';

export const NewsRegisterSchema = z.object({
  title: z.string().min(1, {
    message: 'タイトルを入力して下さい',
  }),
  content: z.string().min(1, {
    message: '内容を入力して下さい',
  }),
});