import H1 from "@/components/Heading";
import Image from "next/image";

type eventPageProps = {
  params: {
    slug: string;
  };
};

async function eventPage({ params }: eventPageProps) {
  const slug = params.slug;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();
  return (
    <main>
      <section className="relative  overflow-hidden flex items-center justify-center py-14 md:py-20 ">
        <Image
          src={event.imageUrl}
          className="object-cover blur-3xl z-0"
          alt={event.name}
          quality={50}
          fill
          sizes="(max-width:1280px) 100vw,1280px"
          priority
        />
        <div className="z-1 relative flex flex-col sm:flex-row gap-x-6 lg:gap-x-16 ">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={200}
            className="border-2 border-white/50 rounded-lg object-cover"
          />
          <div className="flex flex-col ">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap md:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 mt-5 lg:mt-auto w-[95vw] sm:w-full  py-2 rounded-md capitalize border-2 border-white/10 bg-blur state-effects ">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
}

export default eventPage;
