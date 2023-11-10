"use client";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";
import s from "./qr-reader.module.scss";

interface QrReaderProps {
  onOk: (id: string) => void;
  onClose?: () => void;
}

export default function QrReader({ onOk, onClose }: QrReaderProps) {
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [devices, setDevices] = useState<any[]>()
  const [activeCamera, setActiveCamera] = useState<boolean>(true)
  let config = {
    fps: 10,
    qrbox: { width: 300, height: 300 },
    rememberLastUsedCamera: true,
    formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  };

  function handleClose() {
    setActiveCamera(false)
    onClose && onClose();
  }
  useEffect(() => {
    setIsValidating(true);
    if(!activeCamera) return
    Html5Qrcode.getCameras().then(devices => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
      */
     if (devices && devices.length) {
       var cameraId = devices[0].id;
        console.log('d', devices)
        setDevices(devices)
        // .. use this to start scanning.
        const newScanner = new Html5Qrcode('reader')
        const qrCodeSuccessCallback = (result: any) => {
          console.log("qr", result);
    
          };
          const qrCodeErrorCallback = () => {
            setIsValidating(false)
    
            };
            newScanner.start({ deviceId: { exact: cameraId} }, { fps: 10, qrbox: 250 }, qrCodeSuccessCallback, qrCodeErrorCallback)
      }
    }).catch(err => {
      // handle err
    });
    // const scanner = new Html5QrcodeScanner("reader", config, false);

    // scanner.render(succes, error);

    // function succes(result: any) {
    //   console.log("qr", result);

    //   onOk(result);
    //   scanner.clear();
    //   setIsValidating(false);
    // }
    // function error(err: any) {
    //   // console.warn(err)
    // }
  }, [activeCamera]);

  return (
    <>
      <div className={s.inner_wrapper}>
        <button onClick={handleClose} className={s.close}>
          ✖
        </button>
        {devices && (
          <>
    {devices.map((device, index) => (
      <div key={index}>
        <div>ID: {device.id}</div>
        <div>Label: {device.label}</div>
      </div>
    ))}
          </>
        )}
        <div id="reader"></div>
      </div>
    </>
  );
}
