'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/parking", label: "Паркінг" },
  { href: "/about", label: "Про нас" },
  { href: "/contact", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition">
          🅿️ ParkSmart
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition ${
                      isActive
                        ? "text-yellow-400 font-semibold"
                        : "hover:text-yellow-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/dashboard"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              pathname.startsWith("/dashboard")
                ? "bg-yellow-400 text-slate-900"
                : "bg-slate-700 text-white hover:bg-yellow-400 hover:text-slate-900"
            }`}
          >
            ⚙️ Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}