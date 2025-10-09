import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to convert any value to a plain object by serializing and deserializing it
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
