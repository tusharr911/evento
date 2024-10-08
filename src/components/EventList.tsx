import EventCard from "./EventCard";
import { getEvent } from "@/lib/server-utils";
import PaginationControls from "./Pagination-Controls";

type Props = {
  city: string;
  page?: number;
};

async function EventList({ city, page = 1 }: Props) {
  const { events, totalCount } = await getEvent(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex flex-wrap gap-10 justify-center  max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}

export default EventList;
