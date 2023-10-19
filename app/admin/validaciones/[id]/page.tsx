import { Validador } from '@/app/types/validador';
import s from './validaciones.module.scss'
import ValidatorCard from '@/app/components/admin-validators-card';
import NewValidatorButton from '@/app/components/button-new-validator';
import ValidatorsList from '@/app/components/admin-validators-list';

interface ValidacionesProps {
    id: string;
}

const validadores: Validador[] = [
  {
    id: 1,
    token: "ABC123DEF",
    eventId: "event-1",
    eventTitle: "Evento Uno",
    createdDate: new Date('2023-01-01')
  },
  {
    id: 2,
    token: "XYZ456GHI",
    eventId: "event-2",
    eventTitle: "Evento Dos",
    createdDate: new Date('2023-01-02')
  },
  {
    id: 3,
    token: "123456789",
    eventId: "event-3",
    eventTitle: "Evento Tres",
    createdDate: new Date('2023-01-03')
  },
  ];

export default async function Validaciones({params} : { params: ValidacionesProps } ) {
  const id = params.id
    return (
      <div className={`admin-container`}>
        <h1>Lista de validadores</h1>
        <h2>{id}</h2>
        <ValidatorsList validatorsList={validadores} id={id} />
      </div>
    );
}