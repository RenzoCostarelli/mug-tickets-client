import { NextResponse } from 'next/server'
 
export async function POST() {
    const bodyData = {
        event: "64a7339c77f999f2be97a6bb",
        purchaser: { 
              purchaserFirstName: "Caca Tua", 
              purchaserLastName: "Leonard", 
              purchaserDni: 23232323,
              purchaserId: "644fc08045d8dc30c57867bd"
            },
        attendee: { 
            attendeeFirstName: "Renzo", 
            attendeeLastName: "Caca", 
            attendeeDni: 32405970
        }
    }
  const res = await fetch('https://mug-tickets-server.vercel.app/api/tickets/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( bodyData ),
  })
 
  const data = await res.json()
  console.log(data)
 
  return NextResponse.json(data)
}