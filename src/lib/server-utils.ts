import "server-only";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { Capitalize } from "./Utils";

export const getEvent = unstable_cache(async (city: string, page = 1) => {
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
});

export const getEvents = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
