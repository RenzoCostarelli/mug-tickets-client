import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { headers } from 'next/dist/client/components/headers';
 
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const token = formData.get('token');

  const hasLimitedPlaces = formData.get('hasLimitedPlaces') === 'on' ? true : false; 
  const bodyData = {
    creatorId: "64cd42cb68560e328c553fbf",
    email: formData.get('email'),
    eventType: formData.get('eventType'),
    title: formData.get('title'), 
    description: formData.get('description'), 
    address: formData.get('address'),
    ticketsAvailableOnline: formData.get('ticketsAvailableOnline'),
    hasLimitedPlaces:  hasLimitedPlaces
  }
  //console.log('bodyData', bodyData)
  
  const res = await fetch('https://mug-tickets-server.vercel.app/api/events/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': `${token}`
    },
    body: JSON.stringify(bodyData)
  })

  const data = await res.json();

  return NextResponse.json(data)
}

export async function GET(request: NextRequest, response: NextResponse) { 
  const headersList = headers();
  const token = headersList.get("Authorization");

  const res = await fetch('https://mug-tickets-server.vercel.app/api/admins/', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'x-token': `${token}`
    },
  })
  const data = await res.json();
  return NextResponse.json(data)
}