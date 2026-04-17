'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewSpotPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      category: formData.get('category'),
      price: Number(formData.get('price')),
      description: formData.get('description'),
      emoji: formData.get('emoji') || '🚗',
      available: formData.get('available') === 'on',
    }

    try {
      const response = await fetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Помилка створення')
      }

      router.push('/dashboard/spots')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <Link href="/dashboard/spots" className="text-slate-700 hover:underline mb-4 inline-block">
        ← Назад до списку
      </Link>

      <h1 className="text-3xl font-bold mb-6 text-gray-900">Додати нове місце</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6 max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Назва *</label>
            <input type="text" name="name" required
              placeholder="Наприклад: Місце C1"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Категорія *</label>
            <select name="category" required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="Легкові">Легкові</option>
              <option value="Преміум">Преміум</option>
              <option value="Мото">Мото</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ціна (грн/год) *</label>
            <input type="number" name="price" min="1" required
              placeholder="Наприклад: 30"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
            <input type="text" name="emoji" placeholder="🚗"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Опис</label>
            <textarea name="description" rows="3"
              placeholder="Короткий опис паркомісця..."
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" name="available" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-gray-700">Вільне (доступне для паркування)</span>
            </label>
          </div>

          <div className="flex gap-4 pt-2">
            <button type="submit" disabled={saving}
              className="bg-yellow-400 text-slate-900 px-6 py-2 rounded font-semibold hover:bg-yellow-300 disabled:opacity-50"
            >
              {saving ? 'Збереження...' : 'Створити місце'}
            </button>
            <Link href="/dashboard/spots"
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 inline-block"
            >
              Скасувати
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}