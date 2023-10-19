"use client";
import { Validador } from "@/app/types/validador";
import { useState } from "react";
import s from "./validators-list.module.scss";
import NewValidatorButton from "../button-new-validator";
import ValidatorCard from "../admin-validators-card";

export default function ValidatorsList({ validatorsList, id}: {validatorsList: Validador[], id: string;}) {
  const [validadores, setValidadores] = useState<Validador[]>(validatorsList);
  const validadoresOrdenados = [...validadores].sort((a, b) => b.createdDate.getTime() - a.createdDate.getTime());

  const addValidator = (token: string) => {
    const nuevoValidador: Validador = {
      id: Date.now(),
      token: token,
      eventId: id,
      eventTitle: `Evento ${id}`,
      createdDate: new Date(),
    };
    setValidadores((prev) => [...prev, nuevoValidador]);
  };

  const removeValidator = (validadorId: number) => {
    setValidadores((prev) => prev.filter((v) => v.id !== validadorId));
  };

  return (
    <div className={s.list_container}>
      <NewValidatorButton eventId={id} onAddToken={addValidator}/>
      <div className={s.validators_list}>
        {validadoresOrdenados.map((validador) => (
          <ValidatorCard key={validador.id} props={validador} onDelete={removeValidator}/>
        ))}
      </div>
    </div>
  );
}
