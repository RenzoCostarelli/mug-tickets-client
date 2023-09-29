import { NextRequest, NextResponse } from "next/server";
import mercadopago, { payment } from "mercadopago";
import { NextApiResponse } from "next";

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextApiResponse) {
    const r = await req.json();
    // console.log('query', r)
    const topic = r.topic || r.type
    // console.log('topic', topic)
    try {
        if(topic === "payment") {
            // console.log('id', r.data.id)
            const paymentId = r.data.id
            let payment = await mercadopago.payment.findById(Number(paymentId))
            let paymentStatus = payment.body.status
            // console.log('payment', payment)
            if (paymentStatus === "approved") {
                console.log('pago aprobado para el id: ', payment.body.external_reference)
            }
        }
    } catch (error) {
        console.log(error)
    }
   
}

