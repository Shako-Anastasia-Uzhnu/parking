'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SpotsListPage() {
  const [spots, setSpots] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchSpots() {
    try {
      setLoading(true)
      const response = await fetch('/api/spots')
      if (!response.ok) throw new Error('Помилка завантаження')
      const data = await response.json()
      setSpots(data.data || data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSpots()
  }, [])

  async function handleDelete(id, name) {
    if (!confirm(`Видалити "${name}"?`)) return

    try {
      const response = await fetch(`/api/spots/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Помилка видалення')
      fetchSpots()
    } catch (err) {
      alert(err.message)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded p-4">
        <p className="text-red-600">{error}</p>
        <button onClick={fetchSpots} className="mt-2 text-blue-600 underline">Спробувати знову</button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Паркомісця ({spots.length})</h1>
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
            {spots.map(spot => (
              <tr key={spot.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link href={`/dashboard/spots/${spot.id}`} className="flex items-center gap-2 text-slate-700 hover:underline font-medium">
                    <span>{spot.emoji}</span>
                    <span>{spot.name}</span>
                  </Link>
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
                  <button
                    onClick={() => handleDelete(spot.id, spot.name)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Видалити
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}