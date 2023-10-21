'use client'
import { useRef, useState } from "react";

interface ValidatorContainerProps {
  onTokenConfirm: (token: string) => void;
}
export default function ValidatorDialog({ onTokenConfirm }: ValidatorContainerProps ) {
  const [ tokenValue, setToken ] = useState<string>('')
  const [ isInputValid, setInputVaid ] = useState<boolean>(false)
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
    if(v.length == 9) {
      setToken(v)
      setInputVaid(true)
    } else {
      setInputVaid(false)
      setToken('')
    }
  };

  return (
      <dialog id="token-dialog" open ref={dialogRef}>
        <section>
            <label htmlFor="token">Ingresar Token:</label>
            <input type="text" maxLength={9} name="token" onChange={(e) => handleTokenChange(e.target.value)}/>
        </section>
        <menu>
          <button type="submit" onClick={handleConfirm} disabled={!isInputValid}>Confirmar</button>
        </menu>
    </dialog>
  )
}