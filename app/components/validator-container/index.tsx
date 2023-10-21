'use client'
import { useEffect, useRef, useState } from "react";
import ValidatorDialog from "../validator-token-form";


export default function ValidatorContainer() {
  const loadValidatorByToken = async (token: string) => {
    console.log('totos', token)
        try {
          const callApi = async () => {
            const res = await fetch(`/api/validator-token/token=12333`);
            return res;
          };
          const response = await callApi();
          const data = await response.json();
          console.log(data)
          if (data) {
            // mostrar la info y guardar el token en el localstorage
          }
        } catch (error) {
          console.error('errr', error);
        }
    }
    

  return (
    <ValidatorDialog onTokenConfirm={loadValidatorByToken}/>
  )
}