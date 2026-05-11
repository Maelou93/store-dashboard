import { PrismaClient } from "@/lib/generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const edgePrisma = new PrismaClient().$extends(withAccelerate());
