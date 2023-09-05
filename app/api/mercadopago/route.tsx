import { Product } from "@/app/types/product";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json()
    if (req.method === 'POST') {
        const product: Product = body.product
        console.log('product', product)
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

            return NextResponse.json({url: response.body.init_point})
        } catch (error) {
            console.error('errorrrr', error)
        }

    } else {
        return NextResponse.json({message: "Method not allowed"})
    }
}
