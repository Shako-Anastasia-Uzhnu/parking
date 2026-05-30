'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react" 

export default function SpotActions({ spotId }) {
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()
  
  const { data: session } = useSession()
  
  const isAdmin = session?.user?.role === "admin"

  if (!isAdmin) return null

  const handleEdit = () => {
    router.push(`/dashboard/spots/${spotId}/edit`)
  }

  const handleDelete = () => {
    console.log(`Видалення місця ${spotId}`)
    setShowConfirm(false)
    router.push('/dashboard/spots')
  }

  if (showConfirm) {
    return (
      <div className="space-x-2">
        <span className="text-red-600 font-semibold mr-2">Видалити місце?</span>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer text-sm font-medium"
        >
          Так
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer text-sm font-medium"
        >
          Ні
        </button>
      </div>
    )
  }

  return (
    <div className="space-x-2">
      <button 
        onClick={handleEdit} 
        className="bg-yellow-400 text-slate-900 px-4 py-2 rounded hover:bg-yellow-300 font-semibold cursor-pointer text-sm"
      >
        Редагувати
      </button>
      <button
        onClick={() => setShowConfirm(true)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer text-sm font-semibold"
      >
        Видалити
      </button>
    </div>
  )
}