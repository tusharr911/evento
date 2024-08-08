import H1 from "@/components/Heading";
import EventList from "@/components/EventList";
import { Suspense } from "react";
import Loading from "./loading";
import { Capitalize } from "@/lib/Utils";
import { Metadata } from "next";
export type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${Capitalize(city)}`,
  };
}

async function EventsPage({ params }: Props) {
  const city = params.city;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] h-[110vh] ">
      <H1 className="mb-28">
        {city === "all" ? "All events" : `Events in ${Capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
