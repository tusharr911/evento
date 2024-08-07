type SkeletonProps = {
  className?: string;
};
import { cn } from "@/lib/Utils";
function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] bg-white/10 rounded-md",
        className
      )}
    ></div>
  );
}

export default Skeleton;
