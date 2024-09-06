import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export async function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export function Capitalize(string: string) {
  return `${string.charAt(0).toUpperCase() + string.slice(1)}`;
}

