import Link from "next/link";
import ParkingCard from "@/components/ParkingCard";

const popularSpots = [
  { id: 1, name: "Місце A1", description: "Стандартне місце на відкритому майданчику, 1-й ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 6, name: "Преміум P1", description: "Критий паркінг, захист від погоди, відеоспостереження.", price: 55, emoji: "🏎️", category: "Преміум", available: true },
  { id: 9, name: "Мото M1", description: "Місце для мотоцикла або скутера, захищена зона.", price: 15, emoji: "🏍️", category: "Мото", available: true },
]

export default function Home() {
  return (
    <div>

     
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🅿️</div>
          <h1 className="text-5xl font-bold mb-4">ParkSmart</h1>
          <p className="text-xl mb-8 opacity-90">
            Розумна система управління автостоянкою — зручний облік місць, клієнтів та оплати в режимі реального часу.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/parking"
              className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-lg"
            >
              Переглянути місця
            </Link>
            <Link
              href="/about"
              className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition text-lg"
            >
              Про нас
            </Link>
          </div>
        </div>
      </section>

     
      <section className="bg-slate-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-yellow-400">200+</p>
              <p className="text-gray-300 mt-1">Паркомісць</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-400">24/7</p>
              <p className="text-gray-300 mt-1">Режим роботи</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-yellow-400">1500+</p>
              <p className="text-gray-300 mt-1">Клієнтів</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Популярні місця
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularSpots.map(item => (
              <ParkingCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/parking"
              className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              Всі місця →
            </Link>
          </div>
        </div>
      </section>

      
      <section className="bg-yellow-400 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Готові забронювати місце?</h2>
          <p className="text-slate-700 text-lg mb-8">
            Оберіть зручне місце та паркуйтесь без зайвих клопотів.
          </p>
          <Link
            href="/parking"
            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition text-lg"
          >
            Обрати місце
          </Link>
        </div>
      </section>

    </div>
  );
}