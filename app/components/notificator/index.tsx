'use client'
import { useEffect, useState } from 'react'
import s from './notificator.module.scss'

interface NotificationType {
    isOpen: boolean,
    title: string,
    text: string,
    type: 'approved' | 'failure' | null
}

export default function Notificator() {
    const [notification, setNotification] = useState<NotificationType>({ 
        isOpen: false,
        type: null,
        title: '',
        text: ''
    })

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search)
      const status = urlParams.get('status')
      
      if(status === 'approved') {
        setNotification({
            isOpen: true,
            type: "approved",
            title: '¡Gracias por tu compra!',
            text: 'Enviamos tus entradas a tu E-Mail. <br/> Revisa tu casilla para descargarlos y no te olvides de llevarlos el día del evento.'
        })
      } else if (status === 'approved') {
        setNotification({
            isOpen: true,
            type: "failure",
            title: 'Ocurrió un problema con el pago',
            text: 'Lorem ipsun.'
        })
      }

      setTimeout(() => {
        setNotification({
            isOpen: false,
            type: null,
            title: '',
            text: ''
        })
      }, 4000)
    }, [])
    
    return <>
        { 
            notification.isOpen && (
            <div className={s.notification_container}>
            <div className={s.notification_wrapper}>
                <div className={s.notification}>
                    <h1 className={s.title}>¡Gracias por tu compra!</h1>
                    <div className={s.text_wrapper}>
                        <p className={s.text}>
                            Enviamos tus entradas a tu E-Mail.
                        </p>
                        <p className={s.text}>
                            Revisa tu casilla para descargarlos y no te olvides de llevarlos el día del evento. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )}
    
    </>
    
}