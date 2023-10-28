"use client";
import { Validador } from "@/app/types/validador";
import { useEffect, useState } from "react";
import s from "./validators-list.module.scss";
import NewValidatorButton from "../button-new-validator";
import ValidatorCard from "../admin-validators-card";

export default function ValidatorsList({ validatorsList, id}: {validatorsList: Validador[], id: string;}) {
  const [validadores, setValidadores] = useState<Validador[]>(validatorsList);
  const validadoresOrdenados = [...validadores].sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());

  async function addValidator(token: string)  {
    const nuevoValidador: Validador = {
      token: token,
      eventId: id,
      eventTitle: `Evento ${id}`,
      creationDate: new Date(),
    };

    try {
      const response = await fetch('/api/validator-token', {
          method: 'POST',
          body: JSON.stringify(nuevoValidador)
      })
      const res = await response.json();
      } catch (error) {
          console.error(error)
      }

    setValidadores((prev) => [...prev, nuevoValidador]);
  };

  const removeValidator = (validadorId: number) => {
    setValidadores((prev) => prev.filter((v) => v._id !== validadorId));
  };
  
  useEffect(() => {
    console.log('update validators')
  }, [validadores])
  

  return (
    <div className={s.list_container}>
      <NewValidatorButton eventId={id} onAddToken={addValidator}/>
      <div className={s.validators_list}>
        {validadoresOrdenados.map((validador, index) => (
          <ValidatorCard key={index} props={validador} onDelete={removeValidator}/>
        ))}
      </div>
    </div>
  );
}
