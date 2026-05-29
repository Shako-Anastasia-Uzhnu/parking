import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpotById } from "@/lib/spots";
import FavoriteButton from "@/components/FavoriteButton";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const spot = getSpotById(id);
  if (!spot) return { title: "Не знайдено" };
  return { title: spot.name, description: spot.description };
}

export default async function SpotPage({ params }) {
  const { id } = await params;
  const spot = getSpotById(id);

  if (!spot) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/parking" className="text-gray-300 hover:text-white transition text-sm">
            ← Назад до паркінгу
          </Link>
          <div className="mt-6 flex items-center gap-6">
            <span className="text-7xl">{spot.emoji}</span>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold">{spot.name}</h1>
                <FavoriteButton spotId={spot.id} />
              </div>
              <span className="text-gray-300 text-lg">{spot.category}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-500 text-sm font-bold mb-2">💳 Ціна</h3>
              <p className="text-3xl font-bold text-yellow-600">{spot.price} грн/год</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-gray-500 text-sm font-bold mb-2">📌 Статус</h3>
              {spot.available ? (
                <p className="text-2xl font-bold text-green-600">🟢 Вільне</p>
              ) : (
                <p className="text-2xl font-bold text-red-600">🔴 Зайняте</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-gray-500 text-sm font-bold mb-2">📋 Опис</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{spot.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h3 className="text-gray-500 text-sm font-bold mb-2">🏷️ Категорія</h3>
            <span className="inline-block bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-semibold">
              {spot.category}
            </span>
          </div>

          <Link
            href="/parking"
            className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition"
          >
            ← Повернутись до паркінгу
          </Link>
        </div>
      </section>
    </div>
  );
}