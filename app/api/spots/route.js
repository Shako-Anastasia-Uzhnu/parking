import dbConnect from '@/lib/db'
import Spot from '@/lib/models/Spot'

// GET /api/spots
// GET /api/spots?category=A
// GET /api/spots?search=A1
export async function GET(request) {
  await dbConnect()

  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')

  const filter = {}
  if (category && category !== 'Всі') {
    filter.category = category
  }
  if (search) {
    filter.name = { $regex: search, $options: 'i' }
  }
  const spots = await Spot.find(filter).sort({createdAt: -1,})

  return Response.json({
    count: spots.length,
    spots,
  })
}

// POST /api/spots
export async function POST(request) {
  await dbConnect()

  try {
    const body = await request.json()
    const spot = await Spot.create(body)

    return Response.json(spot, {status: 201 })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return Response.json({ errors: messages }, { status: 400 })
    }

    if (error.code === 11000) {
      return Response.json({errors: ['Паркомісце з таким номером вже існує!']},{ status: 400 })
    }

    return Response.json(
      { error: 'Помилка сервера' },
      { status: 500 }
    )
  }
}