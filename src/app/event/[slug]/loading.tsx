import Skeleton from "@/components/Skeleton";

function Loading() {
  return (
    <>
    <div className="flex flex-col items-center gap-2 mt-28  ">
      <Skeleton className="h-4 w-[550px]" />
      <Skeleton className="h-4 w-[450px]" />
      <Skeleton className="h-4 w-[400px]" />
    </div>
    </>
  );
}

export default Loading;
