import { fetchedEventsTypes } from "@/lib/types";
import EventCard from "./EventCard";

type Props = {
  city: string;
};

async function EventList({ city }: Props) {
  const data = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: fetchedEventsTypes[] = await data.json();
  return (
    <section className="flex flex-wrap gap-10 justify-center  min-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
