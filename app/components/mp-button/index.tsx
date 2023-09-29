"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/app/types/product";
import s from "./mp-button.module.scss";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago(process.env.MP_PUBLIC_KEY!, {locale: 'es-AR'});

export function MpButton({ prod, offerId, isEnabled }: { prod: Product, offerId: string, isEnabled: boolean }) {
  const [url, setUrl] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [preferenceState, setPreference] = useState<string>("");
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

  return (
    <>
      {/* <div id="wallet_container"></div> */}
      {loading || !isEnabled ? (
        <a className={`${s.main_pay_button} ${s.disabled}`}>Realizar pago</a>
      ) : (
        <> 
        
        <a className={s.main_pay_button} href={url}>Realizar pago</a>
        {/* <Wallet
          initialization={{
            preferenceId: preferenceState,
          }}
          customization={{
            texts: {
              action: "pay",
            },
          }}
        /> */}
        </>
      )}
    </>
  );
}
