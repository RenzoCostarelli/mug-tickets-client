import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //secure: true,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const data = await request.formData();
    const image: any = data.get('image'); 
    const eventId = data.get('eventId') as string; 
    if(!image) {
      return NextResponse.json({
        ok: false,
        message: "no se ha subido ninguna imagen",
        status: 400
      })
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    
    const res = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({}, (err, result) => {
        if(err) {
          reject(err);
        }  
        resolve(result)
      }).end(buffer);
    })
    console.log(eventId, res)
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server upload error' });
  }
}
