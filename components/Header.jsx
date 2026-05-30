'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from 'next-auth/react' 

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/parking", label: "Паркінг" },
  { href: "/about", label: "Про нас" },
  { href: "/contact", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession()

  return (
    <header className="bg-slate-900 text-white py-4 shadow-md">
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

          <div className="h-5 w-[1px] bg-slate-700 hidden sm:block"></div>

          {status === 'loading' ? (
            <span className="text-gray-400 text-sm animate-pulse">...</span>
          ) : session ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-yellow-400 hover:text-white transition font-medium text-sm">
                👤 {session.user.name}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-xs font-semibold transition cursor-pointer"
              >
                Вийти
              </button>
            </div>
          ) : (
            <Link 
              href="/auth/login" 
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-4 py-1.5 rounded text-sm font-bold transition"
            >
              Увійти
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}