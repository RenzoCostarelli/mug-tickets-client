import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
  const request = await req.json();

  const res = await fetch('https://mug-tickets-server.vercel.app/api/orders/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(  request  ),
  })

  const data = await res.json();
  return NextResponse.json(data)
}