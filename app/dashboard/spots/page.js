'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SpotsPage() {
  const [spots, setSpots] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchSpots() {
    try {
      setLoading(true)
      const response = await fetch('/api/spots')
      if (!response.ok) throw new Error('Помилка завантаження даних')
      const data = await response.json()
      setSpots(data.spots || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSpots()
  }, [])

  async function handleDelete(id) {
    if (!confirm('Видалити це паркомісце?')) return

    try {
      const response = await fetch(`/api/spots/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Помилка видалення')
      fetchSpots()
    } catch (err) {
      alert(err.message)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded p-4">
        <p className="text-red-600">{error}</p>
        <button onClick={fetchSpots} className="mt-2 text-blue-600 underline cursor-pointer">
          Спробувати знову
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Паркомісця ({spots.length})</h1>
        <Link
          href="/dashboard/spots/new"
          className="bg-yellow-400 text-slate-900 px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition"
        >
          + Додати місце
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Назва</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Категорія</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Ціна</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Статус</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Дії</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {spots.map(spot => (
              <tr key={spot._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link href={`/dashboard/spots/${spot._id}`} className="text-blue-600 hover:underline font-medium">
                    {spot.emoji || '🚗'} {spot.name}
                  </Link>
                </td>
                <td className="px-6 py-4 text-gray-600">{spot.category}</td>
                <td className="px-6 py-4 text-gray-600">{spot.price} грн/год</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    spot.available
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {spot.available ? 'Вільне' : 'Зайняте'}
                  </span>
                </td>
                <td className="px-6 py-4">
                <Link href={`/dashboard/spots/${spot._id}`} className="text-yellow-600 hover:underline">
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