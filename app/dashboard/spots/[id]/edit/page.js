'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import SpotForm from '@/components/SpotForm'

export default function EditSpotPage() {
  const { id } = useParams()
  const router = useRouter()
  const [spot, setSpot] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(null)
  const [submitError, setSubmitError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetch(`/api/spots/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Паркомісце не знайдено')
        return res.json()
      })
      .then((data) => {
        setSpot(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoadError(err.message)
        setLoading(false)
      })
  }, [id])

  const handleSubmit = async (formData) => {
    setSubmitError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch(`/api/spots/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(
          data.errors?.join(', ') || data.error || 'Помилка оновлення'
        )
      }

      router.push(`/dashboard/spots/${id}`)
    } catch (err) {
      setSubmitError(err.message)
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div>
        <div className="h-4 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
        <div className="bg-white rounded-lg shadow p-8">
          <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
        </div>
      </div>
    )
  }

  if (loadError) {
    return (
      <div>
        <Link href="/dashboard/spots" className="text-slate-700 hover:underline mb-4 inline-block">
          &larr; Назад до списку
        </Link>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Помилка</h2>
          <p className="text-gray-600">{loadError}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Link href={`/dashboard/spots/${id}`} className="text-slate-700 hover:underline mb-4 inline-block">
        &larr; Назад до місця
      </Link>

      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Редагувати: {spot.name}
        </h1>
        <SpotForm
          initialData={spot}
          onSubmit={handleSubmit}
          submitLabel="Зберегти зміни"
          isSubmitting={isSubmitting}
          error={submitError}
        />
      </div>
    </div>
  )
}