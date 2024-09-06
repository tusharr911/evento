import H1 from "@/components/Heading";
import EventList from "@/components/EventList";
import { Suspense } from "react";
import Loading from "./loading";
import { Capitalize } from "@/lib/Utils";
import { Metadata } from "next";
import { z } from "zod";
export type Props = {
  params: {
    city: string;
  };
};

type EventPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};
export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${Capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();



async function EventsPage({ params, searchParams }: EventPageProps) {
  const city = params.city;
  const validatedPageNumber = pageNumberSchema.safeParse(searchParams.page);

  if (!validatedPageNumber.success) {
    throw new Error("Invalid page number");
  } 

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <H1 className="mb-28">
        {city === "all" ? "All events" : `Events in ${Capitalize(city)}`}
      </H1>

      <Suspense key={city + validatedPageNumber} fallback={<Loading />}>
        <EventList city={city} page={validatedPageNumber.data} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
