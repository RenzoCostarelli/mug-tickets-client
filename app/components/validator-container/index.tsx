'use client'

import { useRef, useState } from "react";
import ValidatorDialog from "../validator-token-form";


export default function ValidatorContainer() {
  const loadValidatorByToken = (token: string) => {
    console.log('toto', token)
  };
    return (
      <ValidatorDialog onTokenConfirm={loadValidatorByToken}/>
    )
}