import { PrismaClient } from "@prisma/client";

module.exports = {
  env: {
    db: global.prisma || new PrismaClient

  }
}