import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello next.js!',
    contents: '에라이',
  }
  return NextResponse.json(data)
}
