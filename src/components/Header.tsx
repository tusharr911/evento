"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/Utils";
const navRoutes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "All events",
    link: "/events/all",
  },
];

function Header() {
  const currentPathName = usePathname();

  return (
    <header className="flex  justify-between items-center sm:px-10 px-3 border-b border-white/10 h-14">
      <Logo />
      <nav className="h-full ">
        <ul className="flex gap-x-6 h-full text-sm">
          {navRoutes.map((route) => (
            <li
              key={route.link}
              className={cn(
                "relative flex items-center hover:text-white transition ",
                {
                  "text-white": currentPathName === route.link,
                  "text-white/50": currentPathName !== route.link,
                }
              )}
            >
              <Link href={route.link}>{route.name}</Link>

              {currentPathName === route.link && (
                <motion.div
                  layoutId="active-header-link"
                  className="h-1 bg-mainGreen w-full absolute bottom-0"
                >
                  {" "}
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
