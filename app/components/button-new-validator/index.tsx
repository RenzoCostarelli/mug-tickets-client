'use client'

import { useRef, useState } from 'react';
import s from './new-validator.module.scss'

interface ButtonProps {
    eventId: string;
}

export default function NewValidatorButton({eventId, onAddToken}: ButtonProps & { onAddToken: (token: string) => void }) {

    const [token, setToken] = useState<string | null>();

    const generateToken = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setToken(result);
    // return result
    };

    const dialogRef = useRef<HTMLDialogElement>(null)
    const handleOpenModal = () => {
        if (dialogRef.current) {
            generateToken()
            dialogRef.current.showModal();
        }
    };

    const handleSaveToken = () => {
        if (dialogRef.current) {
            onAddToken(token!);
            setToken(null)
            dialogRef.current.close();
        }
    };

    const handleCloseModal = () => {
        dialogRef.current!.close()
    }

    return (
        <div className={s.button_container}>
            <button className={s.new} onClick={handleOpenModal}>+ token de validación</button>
            {/* <span>{eventId}</span> */}
            <dialog className={s.token_modal} ref={dialogRef}>
                <button onClick={handleCloseModal} className={s.close}>✖</button>
                {token && 
                <div>
                    <h1>Nuevo Token</h1>
                    <p>{token}</p>
                </div>
                }
                <footer>
                    <button className={s.update} onClick={generateToken}>Actualizar token</button>
                    <button className={s.save} onClick={handleSaveToken}>Guardar</button>

                </footer>
            </dialog>
        </div>
    )
}