import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(req: NextRequest) {
  const request = await req.json();
  const account = await getToken({ req: request, secret: process.env.SECRET });
  console.log('req', request)
  const res = await fetch(`${process.env.apiUrl}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': `${account?.token}`
    },
    body: JSON.stringify(  request  ),
  })

  const data = await res.json();
  return NextResponse.json(data)
}

export async function GET(request: NextRequest, response: NextResponse) {
  console.log('reeeq', request.json())

    const res = await fetch(`${process.env.apiUrl}/token/query/?token=${123}`, {
      method: "GET"
    });

  const data = await res.json();
  console.log('data', data)
  if (data) {
    // mostrar la info y guardar el token en el localstorage
  }
  return NextResponse.json(data)
}