import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpotById } from "@/lib/parking";
import SpotActions from "@/components/SpotActions";

export default async function SpotDetailPage({ params }) {
  const { id } = await params;
  const spot = getSpotById(id);

  if (!spot) notFound();

  return (
    <div>
      <Link href="/dashboard/spots" className="text-slate-700 hover:underline mb-4 inline-block">
        ← Назад до списку
      </Link>

      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{spot.emoji}</span>
            <h1 className="text-3xl font-bold text-gray-900">{spot.name}</h1>
          </div>
          <SpotActions spotId={spot.id} />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-500 text-sm font-bold mb-1">Категорія</h3>
            <p className="text-lg text-gray-900">{spot.category}</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-bold mb-1">Ціна</h3>
            <p className="text-lg text-gray-900">{spot.price} грн/год</p>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-bold mb-1">Статус</h3>
            {spot.available ? (
              <span className="text-green-600 font-semibold">🟢 Вільне</span>
            ) : (
              <span className="text-red-600 font-semibold">🔴 Зайняте</span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-gray-500 text-sm font-bold mb-2">Опис</h3>
          <p className="text-gray-700">{spot.description}</p>
        </div>
      </div>
    </div>
  );
}