import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetchedEventsTypes } from "./types";
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
  const data = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: fetchedEventsTypes[] = await data.json();
  return events;
}

export async function getEvents(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: Promise<fetchedEventsTypes> = await response.json();

  return event;
}
