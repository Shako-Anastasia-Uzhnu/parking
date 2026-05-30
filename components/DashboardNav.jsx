'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function DashboardNav() {
  const pathname = usePathname();
  const { data: session } = useSession();
  
  const isAdmin = session?.user?.role === "admin";

  const links = [
    { href: "/dashboard", label: "📊 Огляд" },
    { href: "/dashboard/spots", label: "🅿️ Паркомісця" }, 
    
    ...(isAdmin ? [{ href: "/dashboard/users", label: "👥 Користувачі" }] : []),
  ];

  return (
    <nav className="w-full">
      <ul className="space-y-1.5">
        {links.map((link) => {
          const isActive =
            link.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-yellow-400 text-slate-900 shadow-sm font-semibold" 
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"  
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}