import { NextResponse } from 'next/server'

const bodyData = {
    "event": "64a7339c77f999f2be97a6bb",
    "purchaser": { 
          "purchaserFirstName": "Renzo", 
          "purchaserLastName": "Leonard", 
          "purchaserDni": 29554804,
          "purchaserId": "644fc08045d8dc30c57867bd"
        },
    "attendee": { 
        "attendeeFirstName": "Renzo", 
        "attendeeLastName": "Leonard", 
        "attendeeDni": 32405970
    }
}
 
export async function POST() {
  const res = await fetch('https://mug-tickets-server.vercel.app/api/tickets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ bodyData }),
  })
 
  const data = await res.json()
 
  return NextResponse.json(data)
}