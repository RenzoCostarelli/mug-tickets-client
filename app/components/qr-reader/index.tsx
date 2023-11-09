'use client'
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useEffect, useState } from 'react'
export default function QrReader() {
    const [scanResult, setScanResult] = useState<any>(null)
    let config = {
        fps: 10,
        qrbox: {width: 300, height: 300},
        rememberLastUsedCamera: true,
        facingMode: "environment" 
      };
      
    useEffect(() => {    
        const scanner = new Html5QrcodeScanner('reader', config, false)
    
        scanner.render(succes, error)
    
        function succes(result: any) {
            console.log('qr', result)
            scanner.clear()
            setScanResult(result)
        }
        function error(err: any) {
            console.warn(err)
        }   
      
    }, [])
    
    return <>
        {/* <h1>Open camera</h1> */}
          <div id='reader'></div>
    </>
}