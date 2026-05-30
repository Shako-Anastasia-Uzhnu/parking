import { NextResponse } from "next/server";
import dbConnect from '@/lib/db'
import Spot from '@/lib/models/Spot'
import { authorize } from "@/lib/authorize";
import { createSpotSchema } from "@/lib/validations/spot";
import { sanitizeObject } from "@/lib/sanitize"; 

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
  const spots = await Spot.find(filter).sort({ createdAt: -1 })

  return NextResponse.json({
    count: spots.length,
    spots,
  })
}

export async function POST(request) {
  const { session, error } = await authorize("admin");
  if (error) return error;

  await dbConnect()

  try {
    const body = await request.json()

    const result = createSpotSchema.safeParse(body);
    
    if (!result.success) {
      const messages = result.error.issues.map((e) => e.message);
      return NextResponse.json({ errors: messages }, { status: 400 });
    }

    const sanitizedData = sanitizeObject(result.data);

    const spot = await Spot.create(sanitizedData)

    return NextResponse.json(spot, { status: 201 })
  } catch (error) {
    if (error.message === "Unexpected end of JSON input" || error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Невалідний формат JSON у тілі запиту" },
        { status: 400 }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(
        { errors: ['Паркомісце з таким номером вже існує в системі!'] },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Помилка сервера при створенні місця' },
      { status: 500 }
    )
  }
}