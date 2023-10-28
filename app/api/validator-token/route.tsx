import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const request = await req.json();
  const account = await getToken({ req: request, secret: process.env.SECRET });
  console.log("req", request);
  const res = await fetch(`${process.env.apiUrl}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-token": `${account?.token}`,
    },
    body: JSON.stringify(request),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const eventId = searchParams.get("eventId");
  const token = searchParams.get("token");
  if (eventId) {
    const resp = await fetch(
      `${process.env.apiUrl}/token/query?eventId=${eventId}`,
      {
        method: "GET",
      }
    );
    const data = await resp.json();

    return NextResponse.json(data);
  }

  if (token) {
    
    const resp = await fetch(
      `${process.env.apiUrl}/token/query?token=${token}`,
      {
        method: "GET",
      }
    );
    const data = await resp.json();
    // mostrar la info y guardar el token en el localstorage
    const eventInfo = await fetch(
      `${process.env.apiUrl}/events/query?_id=${data.tokens[0].eventId}`
    );
    const eventsResponse = await eventInfo.json();
    console.log("event response", eventsResponse);
    return NextResponse.json(eventsResponse);
  }
}
