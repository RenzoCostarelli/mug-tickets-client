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
  let newScanner: Html5Qrcode;
  let config = {
    fps: 10,
    qrbox: { width: 300, height: 300 },
    rememberLastUsedCamera: true,
    formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
  };


  useEffect(() => {
    setIsValidating(true);
    if (!activeCamera) return;

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          const rearCameras = devices.filter((device) =>
            device.label.toLowerCase().includes("back") ||
            device.label.toLowerCase().includes("trasera") ||
            device.label.toLowerCase().includes("posterior")
          );

          const cameraId = rearCameras.length > 0 ? rearCameras[0].id : devices[0].id;

          console.log('Devices:', devices);
          setDevices(devices);

          // Inicializar la variable newScanner
          newScanner = new Html5Qrcode('reader');

          const qrCodeSuccessCallback = (result: any) => {
            console.log("QR Code detected:", result);
            newScanner.clear()
            onOk(result);
          };

          const qrCodeErrorCallback = () => {
            setIsValidating(false);
          };

          newScanner.start(
            { deviceId: { exact: cameraId } },
            { fps: 10, qrbox: 250 },
            qrCodeSuccessCallback,
            qrCodeErrorCallback
          );
        }
      })
      .catch((err) => {
        console.error('Error al obtener cámaras:', err);
      });

    return () => {
      setActiveCamera(false);
      // Detener el escáner cuando el componente se desmonta
      if (newScanner) {
        newScanner.stop();
      }
    };
  }, [activeCamera, onOk]);

  function handleClose() {
    setActiveCamera(false);
    onClose && onClose();
  }
  return (
    <>
      <div className={s.inner_wrapper}>
        {/* {devices && (
          <>
          {devices.map((device, index) => (
            <div key={index}>
            <div>ID: {device.id}</div>
            <div>Label: {device.label}</div>
            </div>
            ))}
            </>
          )} */}
        <div id="reader"></div>
          <button onClick={handleClose} className={s.close}>
            Cerrar
          </button>
      </div>
    </>
  );
}
