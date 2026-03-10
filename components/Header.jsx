import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-yellow-400 font-bold text-xl hover:text-yellow-300 transition">
          🅿️ ParkSmart
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Головна
              </Link>
            </li>
            <li>
              <Link href="/parking" className="hover:text-yellow-400 transition">
                Паркінг
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                Про нас
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}