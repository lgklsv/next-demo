"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col justify-start space-y-2">
      <Link
        href="/"
        className={`w-max px-4 py-2 rounded-xl ${pathname === "/" ? "bg-blue-500" : ""}`}
        prefetch
      >
        Home
      </Link>
      <Link
        href="/star-wars"
        className={`w-max px-4 py-2 rounded-xl ${pathname === "/star-wars" ? "bg-blue-500" : ""}`}
        prefetch
      >
        Star Wars
      </Link>
    </nav>
  );
}
