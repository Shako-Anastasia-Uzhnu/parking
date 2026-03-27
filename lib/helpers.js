import { parkingSpots } from './parking'

export function getParkingStats() {
  const total = parkingSpots.length
  const available = parkingSpots.filter(s => s.available).length
  const unavailable = total - available
  const categories = [...new Set(parkingSpots.map(s => s.category))]
  const avgPrice = Math.round(parkingSpots.reduce((sum, s) => sum + s.price, 0) / total)

  return { total, available, unavailable, categoriesCount: categories.length, avgPrice }
}