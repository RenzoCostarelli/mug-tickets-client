import { NextRequest, NextResponse } from 'next/server'
 
export async function GET(request: NextRequest) {  
  const res = await fetch(`${process.env.apiUrl}/events`, {
    method: 'GET'
  })

  const data = await res.json();

  return NextResponse.json(data)
}