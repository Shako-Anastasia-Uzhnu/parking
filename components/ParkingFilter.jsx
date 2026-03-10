'use client'
import { useState } from 'react'
import ParkingCard from './ParkingCard'

const parkingItems = [
  { id: 1,  name: "Місце A1", description: "Стандартне місце на відкритому майданчику, 1-й ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 2,  name: "Місце A2", description: "Стандартне місце на відкритому майданчику, 1-й ряд.", price: 30, emoji: "🚗", category: "Легкові", available: false },
  { id: 3,  name: "Місце A3", description: "Стандартне місце на відкритому майданчику, 1-й ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 4,  name: "Місце B1", description: "Стандартне місце на відкритому майданчику, 2-й ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 5,  name: "Місце B2", description: "Стандартне місце на відкритому майданчику, 2-й ряд.", price: 30, emoji: "🚗", category: "Легкові", available: false },
  { id: 6,  name: "Преміум P1", description: "Критий паркінг, захист від погоди, відеоспостереження.", price: 55, emoji: "🏎️", category: "Преміум", available: true },
  { id: 7,  name: "Преміум P2", description: "Критий паркінг, захист від погоди, відеоспостереження.", price: 55, emoji: "🏎️", category: "Преміум", available: true },
  { id: 8,  name: "Преміум P3", description: "Критий паркінг, розширене місце для великих авто.", price: 60, emoji: "🚙", category: "Преміум", available: false },
  { id: 9,  name: "Мото M1", description: "Місце для мотоцикла або скутера, захищена зона.", price: 15, emoji: "🏍️", category: "Мото", available: true },
  { id: 10, name: "Мото M2", description: "Місце для мотоцикла або скутера, захищена зона.", price: 15, emoji: "🏍️", category: "Мото", available: true },
]

const categories = ["Всі", ...new Set(parkingItems.map(item => item.category))]

export default function ParkingFilter() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Всі')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  const filteredItems = parkingItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'Всі' || item.category === activeCategory
    const matchesAvailability = !showAvailableOnly || item.available
    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div>
   
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Пошук місця..."
        className="w-full px-4 py-3 border rounded-lg mb-6 focus:outline-none focus:border-yellow-500 text-gray-900"
      />

      
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-slate-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

     
      <label className="flex items-center gap-2 mb-6 cursor-pointer">
        <input
          type="checkbox"
          checked={showAvailableOnly}
          onChange={(e) => setShowAvailableOnly(e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-gray-700">Тільки вільні місця</span>
      </label>

      
      <p className="text-sm text-gray-500 mb-4">
        Знайдено: {filteredItems.length} з {parkingItems.length}
      </p>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <ParkingCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <p className="text-center py-12 text-gray-400">Нічого не знайдено 🔍</p>
      )}
    </div>
  )
}