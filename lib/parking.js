export const parkingSpots = [
  { id: 1,  name: "Місце A1", description: "Стандартне місце на відкритому майданчику, перший ряд біля входу.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 2,  name: "Місце A2", description: "Стандартне місце на відкритому майданчику, перший ряд біля входу.", price: 30, emoji: "🚗", category: "Легкові", available: false },
  { id: 3,  name: "Місце A3", description: "Стандартне місце на відкритому майданчику, перший ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 4,  name: "Місце B1", description: "Стандартне місце на відкритому майданчику, другий ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 5,  name: "Місце B2", description: "Стандартне місце на відкритому майданчику, другий ряд.", price: 30, emoji: "🚗", category: "Легкові", available: false },
  { id: 6,  name: "Місце B3", description: "Стандартне місце на відкритому майданчику, другий ряд.", price: 30, emoji: "🚗", category: "Легкові", available: true },
  { id: 7,  name: "Преміум P1", description: "Критий паркінг, захист від погоди, відеоспостереження 24/7.", price: 55, emoji: "🏎️", category: "Преміум", available: true },
  { id: 8,  name: "Преміум P2", description: "Критий паркінг, захист від погоди, відеоспостереження 24/7.", price: 55, emoji: "🏎️", category: "Преміум", available: true },
  { id: 9,  name: "Преміум P3", description: "Критий паркінг, розширене місце для великих автомобілів.", price: 60, emoji: "🚙", category: "Преміум", available: false },
  { id: 10, name: "Преміум P4", description: "Критий паркінг, VIP зона з додатковою охороною.", price: 70, emoji: "🚙", category: "Преміум", available: true },
  { id: 11, name: "Мото M1", description: "Місце для мотоцикла або скутера, захищена зона під навісом.", price: 15, emoji: "🏍️", category: "Мото", available: true },
  { id: 12, name: "Мото M2", description: "Місце для мотоцикла або скутера, захищена зона під навісом.", price: 15, emoji: "🏍️", category: "Мото", available: true },
]

export function getSpotById(id) {
  return parkingSpots.find((spot) => spot.id === Number(id));
}

export function getCategories() {
  return ["Всі", ...new Set(parkingSpots.map((spot) => spot.category))];
}