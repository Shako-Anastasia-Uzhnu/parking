import dbConnect from '@/lib/db'
import Spot from '@/lib/models/Spot'
import { authorize } from "@/lib/authorize";

export async function GET(request, { params }) {
  await dbConnect()
  const { id } = await params

  try {
    const spot = await Spot.findById(id)

    if (!spot) {
      return Response.json(
        { error: 'Паркомісце не знайдено' },
        { status: 404 }
      )
    }

    return Response.json(spot)
  } catch (error) {
    return Response.json(
      { error: 'Невалідний ID' },
      { status: 400 }
    )
  }
}

export async function PUT(request, { params }) {
  const { session, error } = await authorize("admin");
  if (error) return error;

  await dbConnect()
  const { id } = await params

  try {
    const body = await request.json()
    const spot = await Spot.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })

    if (!spot) {
      return Response.json(
        { error: 'Паркомісце не знайдено' },
        { status: 404 }
      )
    }

    return Response.json(spot)
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message)
      return Response.json({ errors: messages }, { status: 400 })
    }

    return Response.json(
      { error: 'Помилка сервера при оновленні паркомісця' },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  const { session, error } = await authorize("admin");
  if (error) return error;

  await dbConnect()
  const { id } = await params

  try {
    const spot = await Spot.findByIdAndDelete(id)

    if (!spot) {
      return Response.json(
        { error: 'Паркомісце не знайдено' },
        { status: 404 }
      )
    }

    return Response.json({
      message: `Паркомісце "${spot.name}" успішно видалено з системи`
    })
  } catch (error) {
    return Response.json(
      { error: 'Невалідний ID' },
      { status: 400 }
    )
  }
}