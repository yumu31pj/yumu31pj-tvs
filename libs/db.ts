import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
}

declare const globalThis: {
  // globalThisオブジェクトにprismaGlobalプロパティを追加
  // globalThisオブジェクトに追加することで実行環境（ブラウザ・node.jsなど)に関係なくアクセスできるようになる
  // & typeofで既存のglobalオブジェクトの型とprismaGlobalオブジェクトの方を統合
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// グローバル変数を利用してPrisma Clientのインスタンを保持すること
// でアプリ全体で同じインスタンスでアクセスできるようにしている
// シングルトンとはクラスのインスタンスが１つしか作られないこと
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// export default prisma;
export const db = prisma;

// NODE_ENVがproductionでなければPrismaClientのインスタンスをglobalThis.prismaGlobalに保存
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;