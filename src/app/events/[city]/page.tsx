import H1 from "@/components/Heading";
import EventList from "@/components/EventList";
import { fetchedEventsTypes } from "@/lib/types";
type EventPageProps = {
  params: {
    city: string;
  };
};

async function EventsPage({ params }: EventPageProps) {
  const city = params.city;
  const data = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: fetchedEventsTypes[] = await data.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] h-[110vh] ">
      <H1 className="mb-28">
        {city === "all"
          ? "All events"
          : `Events in ${city.substring(0, 1).toUpperCase() + city.slice(1)}`}
      </H1>

      <EventList events={events} />
    </main>
  );
}

export default EventsPage;
