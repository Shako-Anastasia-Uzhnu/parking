import { NextResponse } from 'next/server'
import { parkingSpots, addSpot } from '@/lib/parking'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const available = searchParams.get('available')
  const sort = searchParams.get('sort')
  const order = searchParams.get('order') || 'asc'
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 100

  let result = [...parkingSpots]

  if (category && category !== 'Всі') {
    result = result.filter(spot => spot.category === category)
  }

  if (search) {
    result = result.filter(spot =>
      spot.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (available === 'true') {
    result = result.filter(spot => spot.available)
  }

  if (sort === 'price') {
    result.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price)
  }

  if (sort === 'name') {
    result.sort((a, b) => order === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
    )
  }

  const total = result.length
  const pages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const paginated = result.slice(start, start + limit)

  return NextResponse.json({
    data: paginated,
    meta: { total, page, pages, limit }
  })
}

export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.name || !body.category || !body.price) {
      return NextResponse.json(
        { error: "Поля name, category та price є обов'язковими" },
        { status: 400 }
      )
    }

    if (typeof body.price !== 'number' || body.price <= 0) {
      return NextResponse.json(
        { error: 'Ціна має бути додатнім числом' },
        { status: 400 }
      )
    }

    const newSpot = addSpot(body)
    return NextResponse.json(newSpot, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Невалідний JSON' }, { status: 400 })
  }
}