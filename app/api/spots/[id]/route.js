import { NextResponse } from "next/server";
import dbConnect from '@/lib/db'
import Spot from '@/lib/models/Spot'
import { authorize } from "@/lib/authorize";
import { updateSpotSchema } from "@/lib/validations/spot"; 
import { sanitizeObject } from "@/lib/sanitize"; 

export async function GET(request, { params }) {
  await dbConnect()
  const { id } = await params

  try {
    const spot = await Spot.findById(id)

    if (!spot) {
      return NextResponse.json(
        { error: 'Паркомісце не знайдено' },
        { status: 404 }
      )
    }

    return NextResponse.json(spot)
  } catch (error) {
    return NextResponse.json(
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

    const result = updateSpotSchema.safeParse(body);
    
    if (!result.success) {
      const messages = result.error.issues.map(err => err.message)
      return NextResponse.json({ errors: messages }, { status: 400 })
    }

    const sanitizedData = sanitizeObject(result.data);

    const spot = await Spot.findByIdAndUpdate(id, sanitizedData, {
      new: true,
      runValidators: true,
    })

    if (!spot) {
      return NextResponse.json(
        { error: 'Паркомісце не знайдено' },
        { status: 404 }
      )
    }

    return NextResponse.json(spot)
  } catch (error) {
    return NextResponse.json(
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
      return NextResponse.json(
        { error: 'Паркомісце не знайдено' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: `Паркомісце "${spot.name}" успішно видалено з системи`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Невалідний ID' },
      { status: 400 }
    )
  }
}