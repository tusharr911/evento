import EventCard from "./EventCard";
import { getEvent } from "@/lib/Utils";

type Props = {
  city: string;
};

async function EventList({ city }: Props) {
  const events = await getEvent(city);
  return (
    <section className="flex flex-wrap gap-10 justify-center  min-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
