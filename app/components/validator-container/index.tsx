'use client'
import { useEffect, useRef, useState } from "react";
import ValidatorDialog from "../validator-token-form";

interface ValidatorContainerProps {
  onTokenConfirm: (token: string) => void;
}

export default function ValidatorContainer() {
  const loadValidatorByToken = async (token: string) => {
    console.log('totos', token)
        try {
          const callApi = async () => {
            const res = await fetch(`/api/validator-token/token=${token}`);
            return res;
          };
          const response = await callApi();
          const data = await response.json();
          console.log(data.tokens[0].eventId)
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