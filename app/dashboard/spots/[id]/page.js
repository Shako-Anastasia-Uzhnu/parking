import Link from "next/link";
import { parkingSpots } from "@/lib/parking";

export const metadata = { title: "Управління паркомісцями" };

export default async function SpotsListPage() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Паркомісця</h1>
        <Link href="/dashboard/spots/new" className="bg-yellow-400 text-slate-900 px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition">
          + Додати місце
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Назва</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Категорія</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ціна</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Статус</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Дії</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {parkingSpots.map((spot) => (
              <tr key={spot.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span>{spot.emoji}</span>
                    <span className="font-medium text-gray-900">{spot.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{spot.category}</td>
                <td className="px-6 py-4 text-gray-700">{spot.price} грн/год</td>
                <td className="px-6 py-4">
                  {spot.available ? (
                    <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-700">Вільне</span>
                  ) : (
                    <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-700">Зайняте</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <Link href={`/dashboard/spots/${spot.id}`} className="text-slate-700 hover:underline font-medium">
                    Переглянути
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}