import { NextRequest, NextResponse } from "next/server";
import { Product } from "@/app/types/product";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN!,
})

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const product: Product = body.product;    
    const URL =  'http://localhost:3000';

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
        const response = await mercadopago.preferences.create(preference);

        return NextResponse.json(response);
    } catch (error) {
        console.error('error', error);
        return NextResponse.json(error);
    }
}
