import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

// グローバル変数でインスタンス化することにより、保存するたびにホットリロードされないようにする
// これをシングルトンと呼ぶらしい
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

if(!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
}

prisma = globalForPrisma.prisma;

export default prisma;