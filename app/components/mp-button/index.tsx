'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '@/app/types/product'
import s from './mp-button.module.scss'

interface MpButtonProps {
    product: Product
}

export function MpButton ({product}: MpButtonProps) {
  const [url, setUrl] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true)
      try {
        const callApi = async () => {
          const preference =  await fetch('/api/mercadopago', {
            method: 'POST',
            body: JSON.stringify({ product })
          })
          return preference
        }
        const response = await callApi();
        const data = await response.json()
        
        setUrl(data.response.sandbox_init_point)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    generateLink()
  }, [product])
  

  return (
    <div>
        {
            loading ? (
            <button disabled className={s.mp_button}>Pagarrrr</button>
            ) : (
                <a href={url!} className={s.mp_button}>Pagar ahora si {url}</a>
            )
        }
    </div>
  )
}
