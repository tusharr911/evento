import { fetchedEventsTypes } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: fetchedEventsTypes;
};

function EventCard({ event }: EventCardProps) {
  return (
    <Link
      className="flex-1 basis-80 h-[380px] max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section className="flex flex-col h-full w-full bg-white/[3%] rounded-xl overflow-hidden relative state-effects">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className=" flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm mt-4 text-white/50">{event.location}</p>
        </div>
        <section className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] w-[45px] h-[45px] bg-black/40 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-mainGreen text-xs uppercase ">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}

export default EventCard;
