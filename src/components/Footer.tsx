import Link from "next/link";

const navRoutes = [
  {
    name: "Privacy policy",
    path: "/privacy",
  },
  {
    name: "Terms and conditions",
    path: "/terms-condition",
  },
];
function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <p className="text-white/30">Copyright 2024 Next.js</p>
      <ul className="flex gap-x-2 sm:gap-x-8 text-white/30">
        {navRoutes.map((route) => (
          <li
            key={route.path}
            className="text-white/30 hover:text-white/80 transition"
          >
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
