'use client'

import { useRef, useState } from 'react';
import s from './new-validator.module.scss'

interface ButtonProps {
    eventId: string;
}

export default function NewValidatorButton({eventId}: ButtonProps ) {

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

    const handleCloseModal = () => {
        if (dialogRef.current) {
            console.log('token', token)
            console.log('eventId', eventId)
            setToken(null)
            dialogRef.current.close();
        }
    };

    return (
        <div className={s.button_container}>
            <button onClick={handleOpenModal}>+ token de validación</button>
            <span>{eventId}</span>
            <dialog className={s.token_modal} ref={dialogRef}>
                {token && <p>Token: {token}</p>}
                <button onClick={generateToken}>Actualizar token</button>
                <button onClick={handleCloseModal}>Guardar</button>
            </dialog>
        </div>
    )
}