import { cn } from "@/lib/Utils";
type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};
function H1({ children, className = "" }: HeadingProps) {
  return (
    <h1
      className={cn("text-3xl font-bold tracking-tight lg:text-6xl", className)}
    >
      {children}
    </h1>
  );
}

export default H1;
