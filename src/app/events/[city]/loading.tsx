import Skeleton from "@/components/Skeleton";

function Loading() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-28">
        <Skeleton className="h-5 w-[550px]" />
        <Skeleton className="h-5 w-[450px]" />
        <Skeleton className="h-5 w-[400px]" />
      </div>
      <div className="flex flex-wrap gap-x-7 items-center mt-32">
        <Skeleton className="h-[250px] w-[400px]" />
        <Skeleton className="h-[250px] w-[400px]" />
        <Skeleton className="h-[250px] w-[400px]" />
      </div>
    </>
  );
}

export default Loading;
