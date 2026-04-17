import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'API працює! Автостоянка ParkSmart',
    timestamp: new Date().toISOString()
  })
}