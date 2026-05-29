'use client'

import { useState } from 'react'
import Link from 'next/link'

const CATEGORIES = ['A', 'B', 'C', 'VIP']
const TYPES = ['standard', 'disabled', 'electric', 'motorcycle']

export default function SpotForm({
  initialData, onSubmit, submitLabel = 'Зберегти',
  isSubmitting,
  error
}) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    category: initialData?.category || '',
    type: initialData?.type || 'standard',
    price: initialData?.price || '',
    description: initialData?.description || '',
    emoji: initialData?.emoji || '🚗',
    available: initialData?.available ?? true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({...formData, [name]: type === 'checkbox' ? checked : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({...formData, price: Number(formData.price)})
  }

  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block font-bold mb-2">Назва місця *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Зона *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            >
              <option value="">Оберіть зону</option>
              {CATEGORIES.map(z => (
                <option key={z} value={z}>{z}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-bold mb-2">Тип</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              {TYPES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-bold mb-2">Ціна за годину *</label>
            <input
              type="number"
              name="price"
              min="1"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

        </div>

        <div>
          <label className="block font-bold mb-2">Опис</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          <label>Доступне місце</label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-700 text-white px-6 py-3 rounded"
          >
            {isSubmitting ? 'Збереження...' : submitLabel}
          </button>

          <Link
            href="/dashboard/spots"
            className="bg-gray-300 px-6 py-3 rounded inline-block"
          >
            Скасувати
          </Link>
        </div>

      </form>
    </>
  )
}