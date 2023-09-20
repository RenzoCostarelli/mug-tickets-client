'use client'

import Image from "next/image";
import { useState } from "react";

export default function ImageUploader({ eventId, url }: { eventId: string, url: string}) {
    const [file, setFile] = useState<string | Blob >('');
    const [fileUrl, setFileUrl] = useState<string | null>(url);

    const handleFileChange = (e: any) => {
      setFile(e.target.files[0]);
    };

    const handleSubmit = async (e: any) => {
      try {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        const imageUploaded = await res.json();
        setFileUrl(imageUploaded.secure_url);
      } catch (error) {
          console.error(error);
      }
    };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      border: '0.5px solid #888',
      borderRadius: '30px',
      padding: '15px'
    }}>
      
      <form onSubmit={handleSubmit}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Image 
                src={fileUrl || '/images/flyer__test.jpg'} 
                alt={'Mug'}
                width={100}
                height={100}
                style={{
                  borderRadius: '15px'
                }}
            />
            <div>
              <input name="eventId" type="hidden" value={eventId} />
              <input type='file' name='file' onChange={handleFileChange} />
              <button  
                type='submit'
                style={{
                  width: '100px'
                }}>Submit</button>   
            </div>       
          </div>
      </form>
    </div>
  )
} 