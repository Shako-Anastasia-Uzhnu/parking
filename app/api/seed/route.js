import dbConnect from '@/lib/db'
import Spot from '@/lib/models/Spot'
import User from "@/lib/models/User"; 
import bcrypt from "bcryptjs";       

const initialSpots = [
  {
    name: 'A1',
    description: 'Стандартне місце біля в’їзду, зона A',
    price: 30,
    category: 'A',
    type: 'standard',
    available: true,
  },
  {
    name: 'A2',
    description: 'Стандартне місце в зоні A',
    price: 30,
    category: 'A',
    type: 'standard',
    available: false,
  },
  {
    name: 'A3',
    description: 'Зручне місце біля входу',
    price: 30,
    category: 'A',
    type: 'standard',
    available: true,
  },
  {
    name: 'B1',
    description: 'Зона B, середній ряд',
    price: 35,
    category: 'B',
    type: 'standard',
    available: true,
  },
  {
    name: 'B2',
    description: 'Зона B, закритий доступ',
    price: 35,
    category: 'B',
    type: 'standard',
    available: false,
  },
  {
    name: 'B3',
    description: 'Зона B, стандартне місце',
    price: 35,
    category: 'B',
    type: 'standard',
    available: true,
  },
  {
    name: 'C1',
    description: 'Зона C, економ паркінг',
    price: 25,
    category: 'C',
    type: 'standard',
    available: true,
  },
  {
    name: 'C2',
    description: 'Зона C, економ варіант',
    price: 25,
    category: 'C',
    type: 'standard',
    available: true,
  },
  {
    name: 'VIP1',
    description: 'VIP місце з охороною',
    price: 70,
    category: 'VIP',
    type: 'electric',
    available: true,
  },
  {
    name: 'VIP2',
    description: 'VIP місце під навісом',
    price: 80,
    category: 'VIP',
    type: 'disabled',
    available: true,
  },
  {
    name: 'M1',
    description: 'Мото зона під навісом',
    price: 15,
    category: 'C',
    type: 'motorcycle',
    available: true,
  },
  {
    name: 'M2',
    description: 'Мото паркінг',
    price: 15,
    category: 'C',
    type: 'motorcycle',
    available: false,
  },
]

export async function GET() {
  try {
    await dbConnect()

    await Spot.deleteMany({})
    const spots = await Spot.create(initialSpots)

    await User.deleteMany({}) 
    
    const hashedPassword = await bcrypt.hash("password123", 10);

    const users = await User.insertMany([
      {
        name: "Адміністратор",
        email: "admin@test.com",
        password: hashedPassword,
        role: "admin",
      },
      {
        name: "Користувач",
        email: "user@test.com",
        password: hashedPassword,
        role: "user",
      },
    ]);

    return Response.json({
      message: "Seed виконано",
      spotsCount: spots.length,
      usersCount: users.length,
      testAccounts: [
        { email: "admin@test.com", password: "password123", role: "admin" },
        { email: "user@test.com", password: "password123", role: "user" },
      ],
    })
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    )
  }
}