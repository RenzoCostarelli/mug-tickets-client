import { NextRequest, NextResponse } from "next/server";
import mercadopago, { payment } from "mercadopago";
import { NextApiResponse } from "next";

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextApiResponse) {
    const r = await req.json();
    const topic = r.topic || r.type
    try {
        if(topic === "payment") {
            const paymentId = r.data.id
            let payment = await mercadopago.payment.findById(Number(paymentId))
            let paymentStatus = payment.body.status
            if (paymentStatus === "approved") {
                let offerId = payment.body.external_reference
                try {
                    const response = await fetch(`${process.env.apiUrl}/orders/${offerId}`, {
                      method: 'PATCH',
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({"status": "aproved"})
                    });
                    
                    const result = await response.json();
                  } catch (error) {
                    console.error(error);
                  }
            }
        }
    } catch (error) {
        console.log(error)
    }
   
}

