'use client'
import { useEffect, useRef, useState } from "react";
import ValidatorDialog from "../validator-token-form";


export default function ValidatorContainer() {
  const loadValidatorByToken = async (token: string) => {
    console.log('totos', token)
        try {
          const callApi = async () => {
            const tokenId = await fetch("/api/validator-token", {
              method: "POST",
              body: JSON.stringify([{ token }]),
            });
            return tokenId;
          };
          const response = await callApi();
          const data = await response.json();
        } catch (error) {
          console.error('errr', error);
        }
    }
    

  return (
    <ValidatorDialog onTokenConfirm={loadValidatorByToken}/>
  )
}