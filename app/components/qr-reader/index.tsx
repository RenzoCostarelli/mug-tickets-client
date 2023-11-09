"use client";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

interface QrReaderProps {
  onOk: (id:string) => void
}

export default function QrReader({onOk}: QrReaderProps) {
  const [scanResult, setScanResult] = useState<string>();
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  let config = {
    fps: 10,
    qrbox: { width: 300, height: 300 },
    rememberLastUsedCamera: true,
    facingMode: "environment",
    formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  };

  useEffect(() => {
    setIsValidating(true)
    const scanner = new Html5QrcodeScanner("reader", config, false);

    scanner.render(succes, error);

    function succes(result: any) {
      console.log("qr", result);

      onOk(result)
      scanner.clear();
      // setScanResult(result);
      setIsValidating(false)
    }
    function error(err: any) {
      // console.warn(err)
    }
  }, [scanResult]);

  return (
    <>
      <div id="reader"></div>
      <button onClick={e => setScanResult('')}>Escanear</button>
    </>
  );
}
