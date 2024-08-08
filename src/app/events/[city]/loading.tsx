import Skeleton from "@/components/Skeleton";

function Loading() {
  return (
    <div className="flex gap-x-7 items-center mt-12">
      <Skeleton className="h-[250px] w-[400px]" />
      <Skeleton className="h-[250px] w-[400px]" />
      <Skeleton className="h-[250px] w-[400px]" />
    </div>
  );
}

export default Loading;
