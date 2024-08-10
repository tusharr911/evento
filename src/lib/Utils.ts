import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

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

export async function getEvent(city: string, page = 1) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : Capitalize(city),
      //passing undefined will give you all the events
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: Capitalize(city),
      },
    });
  }

  return {
    events,
    totalCount,
  };
}

export async function getEvents(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
}
