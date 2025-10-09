"use server";
import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";

// Function to fetch the latest 4 products from the database  

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}
