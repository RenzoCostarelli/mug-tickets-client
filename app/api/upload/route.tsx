import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { getToken } from 'next-auth/jwt';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const account = await getToken({ req: request, secret: process.env.SECRET });
    const data = await request.formData();
    const file = data.get('image') as any; 
    const eventId = data.get('eventId') as string;

    if(!file) {
      return NextResponse.json({
        ok: false,
        message: "no se ha subido ninguna imagen",
        status: 400
      })
    }

    const bytes: ArrayBuffer = await file.arrayBuffer();
    const buffer: Buffer = Buffer.from(bytes);    
    
    const cloudData: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({}, (err, result) => {
        if(err) {
          reject(err);
        }  
        resolve(result);
      }).end(buffer);
    });
    
    console.log(cloudData?.secure_url)

    //falta endpoint PUT { eventId, image }

    const res = await fetch(`${process.env.apiUrl}/events/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': `${account?.token}`
      },
      body: JSON.stringify({eventId, image: cloudData?.secure_url})
    })
  
    const response = await res.json();
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server upload error' });
  }
}
