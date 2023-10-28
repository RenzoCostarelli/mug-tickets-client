'use client'
import { useEffect, useState } from 'react';
import s from './list.module.scss'
import { Buyer } from '@/app/types/buyer';

// agregar GET de tickets aca
const initialAttendees = [
    { name: "Juan Pérez", dni: "12345678", ticketType: "General dia 1" },
    { name: "María López", dni: "87654321", ticketType: "General dia 2" },
    { name: "Luis Rodríguez", dni: "11223344", ticketType: "Abono día 1 + día 2" },
    { name: "Carla Fernández", dni: "55667788", ticketType: "General dia 1" },
    { name: "Fernando García", dni: "99887766", ticketType: "Abono día 1 + día 2" },
    { name: "Paula Torres", dni: "66778899", ticketType: "General dia 2" },
    { name: "Carlos Ramírez", dni: "22556644", ticketType: "General dia 1" },
    { name: "Lucía Morales", dni: "88990011", ticketType: "Abono día 1 + día 2" },
    { name: "Diego Ortiz", dni: "33221100", ticketType: "General dia 2" },
    { name: "Isabel Gutiérrez", dni: "77665544", ticketType: "General dia 1" }
];

interface Attendee  {
    name: string;
    dni: string;
    ticketType: string;
    purchaser?: Buyer;
    validated?: boolean;
    tickets?: any;
};


export default function AttendeeList ({ ticketsList } : {ticketsList : any}) {
    const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees);
    const [isAscending, setIsAscending] = useState<boolean>(true);
    const [sortCriteria, setSortCriteria] = useState<string>('name');

    // cambiar por un useeffect
    const sortAttendees = (criteria: string) => {
        if (sortCriteria === criteria) {
            setIsAscending(!isAscending);
        } else {
            setSortCriteria(criteria);
            setIsAscending(true);
        }

        const sorted = [...attendees].sort((a, b) => {
            const valueA = a[criteria as keyof Attendee];
            const valueB = b[criteria as keyof Attendee];
            return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });

        setAttendees(sorted);
    }
    

    return <>
        <div className={s.info_grid}>
        <div className={s.table_body}>
        <div className={`${s.table_row} ${s.table_head}`}>
        <div className={`${s.name} ${s.sort_button}`} onClick={() => sortAttendees('name')}>Nombre y apellido</div>
            <div className={`${s.dni} ${s.sort_button}`} onClick={() => sortAttendees('dni')}>DNI</div>
            <div className={`${s.tipo} ${s.sort_button}`} onClick={() => sortAttendees('ticketType')}>Nro de entrada</div>
            <div className={`${s.tipo} ${s.sort_button}`} onClick={() => sortAttendees('ticketType')}>E-mail</div>
        </div>
        {ticketsList.map((attendee: any) => (
            <div key={attendee.ticketNumber} className={s.table_row}>
                <div className={s.name}>{attendee.name}</div>
                <div className={s.dni}>{attendee.dni}</div>
                <div className={s.tipo}>{attendee.ticketNumber}</div>
                <div className={s.tipo}>{attendee.email}</div>
            </div>
        ))}
        </div>
    </div>
    
    </>
}