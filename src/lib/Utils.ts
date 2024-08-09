import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

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

export async function getEvent(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : Capitalize(city),
      //passing undefined will give you all the events
    },
  });

  return events;
}

export async function getEvents(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}
