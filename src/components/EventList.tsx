import { fetchedEventsTypes } from "@/lib/types";
import EventCard from "./EventCard";
type EventListProps = {
  events: fetchedEventsTypes[];
};
function EventList({ events }: EventListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center  min-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
