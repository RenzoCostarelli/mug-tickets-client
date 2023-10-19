'use client'

import { useRef, useState } from "react";

interface ValidatorContainerProps {
  onTokenConfirm: (token: string) => void;
}
export default function ValidatorDialog({ onTokenConfirm }: ValidatorContainerProps ) {
  const [ tokenValue, setToken ] = useState<string>('')
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleCloseModal = () => {
      if (dialogRef.current) {
          dialogRef.current.close();
      }
  };

  const handleConfirm = () => {
    console.log(tokenValue)
    onTokenConfirm(tokenValue)
  }

  const handleTokenChange = (v: string) => {
      console.log('ve', v)
      setToken(v)
  };

  return (
      <dialog id="token-dialog" open ref={dialogRef}>
        <section>
            <label htmlFor="token">Ingresar Token:</label>
            <input type="text" name="token" onChange={(e) => handleTokenChange(e.target.value)}/>
        </section>
        <menu>
          <button id="cancel" type="reset" onClick={handleCloseModal}>
            Cerrar
          </button>
          <button type="submit" onClick={handleConfirm}>Confirmar</button>
        </menu>
    </dialog>
  )
}