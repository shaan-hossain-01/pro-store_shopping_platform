import { PrismaClient } from "@/lib/generated/prisma";

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient().$extends({
  result: {
    product: {
      price: {
        compute(product: { price: { toString(): string } }) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: { rating: { toString(): string } }) {
          return product.rating.toString();
        },
      },
    },
  },
});
