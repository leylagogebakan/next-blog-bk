import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { userId, sessionId, getToken } = auth()
  if (!sessionId) {
    return NextResponse.json({ id: null }, { status: 401 })
  }
  const token = await getToken({template: 'api-auth'});
  return NextResponse.json({ id: userId, token }, { status: 200 })
}
