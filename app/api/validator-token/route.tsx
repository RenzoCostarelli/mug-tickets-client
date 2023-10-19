import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
  const request = await req.json();
  console.log('req', request)
  return NextResponse.json(request)
  const res = await fetch(`${process.env.apiUrl}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(  request  ),
  })

  const data = await res.json();
  return NextResponse.json(data)
}