"use client";
import { Validador } from "@/app/types/validador";
import { useState } from "react";
import s from "./validators-list.module.scss";
import NewValidatorButton from "../button-new-validator";
import ValidatorCard from "../admin-validators-card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      if (res.ok === false) {
        toast.error('Error al crear el token')
        return
      }

      setValidadores((prev) => [...prev, nuevoValidador]);
      toast.success('Token de validación agregado')
      } catch (error) {
          console.error(error)
      }

  };

  const removeValidator = async(validadorId: string) => {
    const response = await fetch(`/api/validator-token/${validadorId}`, {
      method: 'DELETE',
    })
 
    const data = await response.json();
    if(data.ok === false) {
      toast.error('Error al eliminar el Token')
      return
    }
    toast.success('Token eliminado correctamente')
    setValidadores((prev) => prev.filter((v) => v._id !== validadorId))
  };
 

  return (
    <div className={s.list_container}>
      <NewValidatorButton eventId={id} onAddToken={addValidator}/>
      <div className={s.validators_list}>
        {validadoresOrdenados.map((validador, index) => (
          <ValidatorCard key={index} props={validador} onDelete={removeValidator}/>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
