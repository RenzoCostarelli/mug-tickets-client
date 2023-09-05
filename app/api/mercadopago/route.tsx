import { Product } from "@/app/types/product";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextApiResponse) {
    const body = await req.json()
    console.log('request', body)
    if (req.method === 'POST') {
        const product: Product = body.product
        const URL =  'http://localhost:3000'
        try {
            const preference: CreatePreferencePayload = {
                items: [
                    {
                        title: product.title,
                        unit_price: product.price,
                        quantity: 1
                    }
                ],
                auto_return: 'approved',
                back_urls: {
                    success: `${URL}`,
                    failure: `${URL}`
                },
                notification_url: `${URL}/api/notify`
            }

            const response = await mercadopago.preferences.create(preference)
            res.status(200).send({url: response.body.init_point})
            
        } catch (error) {
            console.error('errorrrr', error)
        }

    } else {
        res.status(400).json({message: "Method not allowed"})
    }
}
