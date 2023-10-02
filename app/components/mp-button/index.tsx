"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/types/product";
import s from "./mp-button.module.scss";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import useStore from "@/app/store/formStore";
import { Buyer } from "@/app/types/buyer";
initMercadoPago(process.env.MP_PUBLIC_KEY!, {locale: 'es-AR'});

export function MpButton({ prod, offerId, isEnabled, buyer }: { prod: Product, offerId: string, isEnabled: boolean, buyer: Buyer }) {
  const [url, setUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [paying, setPaying] = useState<boolean>(false)
  const [preferenceState, setPreference] = useState<string>("");
  const isSubmitting = useStore((state) => state.isSubmitting);
  const setSubmitting = useStore((state) => state.setSubmitting);
  const [product, setProduct] = useState<Product>({
    id: prod.id,
    title: prod.title,
    img: prod.img,
    quantity: prod.quantity,
    price: prod.price,
    description: prod.description,
    offerId: offerId
  });

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);
      try {
        const callApi = async () => {
          const preference = await fetch("/api/mercadopago", {
            method: "POST",
            body: JSON.stringify({ product }),
          });
          return preference;
        };
        const response = await callApi();
        const data = await response.json();
        setPreference(data.response.id);
        setUrl(data?.response?.sandbox_init_point);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    generateLink();
  }, [product]);

  const handleClick = async () => {
    setLoading(true);
    setPaying(true)
    setSubmitting(true)
    const bodyData = {
      purchaser: {
        purchaserFirstName: buyer.purchaserFirstName,
        purchaserLastName: buyer.purchaserLastName,
        purchaserPhone: buyer.phone,
        purchaserDni: buyer.purchaserDni,
        purchaserEmail: buyer.purchaserEmail
      }
    }
    try {
      const response = await fetch(`${process.env.apiUrl}/orders/${offerId}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData)
      });
      
      const result = await response.json();
      if (result.ok) {
        window.location.href = url!;
      } else {
        console.error("API check failed");
      }
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false)
  }

  return (
    <>
      {loading || !isEnabled ? (
        <button className={`${s.main_pay_button} ${s.disabled} ${paying ? s.animated : ''}`} disabled>Realizar pago</button>
      ) : (
        <> 
        <button className={`${s.main_pay_button}`} onClick={handleClick}>Realizar pago</button>
        </>
      )}
    </>
  );
}
