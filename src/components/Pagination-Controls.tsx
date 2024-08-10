import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DividerHorizontalIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyle =
  "text-white bg-white/5 px-5 py-3 rounded-md opacity-75 flex items-center hover:opacity-100 gap-x-2 transition text-sm";
type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full ">
      {previousPath ? (
        <Link href={previousPath} className={btnStyle}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link href={nextPath} className={btnStyle}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}

export default PaginationControls;
