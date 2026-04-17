'use client'
import { useState, useEffect, use } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SpotDetailPage({ params }) {
  const { id } = use(params)
  const [spot, setSpot] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchSpot() {
      try {
        const response = await fetch(`/api/spots/${id}`)
        if (!response.ok) {
          if (response.status === 404) throw new Error('Паркомісце не знайдено')
          throw new Error('Помилка завантаження')
        }
        const data = await response.json()
        setSpot(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchSpot()
  }, [id])

  async function handleDelete() {
    if (!confirm(`Видалити "${spot.name}"?`)) return

    try {
      const response = await fetch(`/api/spots/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Помилка видалення')
      router.push('/dashboard/spots')
      router.refresh()
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
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-400 mb-4">404</h1>
        <p className="text-gray-600 mb-4">{error}</p>
        <Link href="/dashboard/spots" className="text-slate-700 hover:underline">← До списку місць</Link>
      </div>
    )
  }

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
          <div className="space-x-2">
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Видалити
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
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

        {spot.description && (
          <div>
            <h3 className="text-gray-500 text-sm font-bold mb-2">Опис</h3>
            <p className="text-gray-700">{spot.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}