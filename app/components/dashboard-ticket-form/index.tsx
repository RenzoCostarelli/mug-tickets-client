'use client'

import { useState } from "react";
import style from "./page.module.scss"
import { useSession } from "next-auth/react"
import { TicketTypeData } from "@/app/types/ticket";

type EventProps = {
    ticket: TicketTypeData;
}

export default function TicketForm({ ticket }: EventProps) {
    const { data: session } = useSession();
    const [data, setData] = useState<TicketTypeData>(ticket);

    async function handleSubmit(event: any) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const ticketId = formData.get('ticketId') as string;

        const response = await fetch('/api/admin/entradas', {
            method: ticketId? 'PUT' : 'POST',
            body: formData,
        })
    
        // Handle response if necessary
        const res = await response.json();
        //console.log('resp', res, data)
        // ...
    }

    const handleInputChange = (event: any) => {
        const { name, value, type, checked } = event.target;
    
        setData(values => ({
            ...values,
            [name]: type === 'checkbox' ? checked : value
        }));        
    };

    return (
        <div style={{
            padding: 10,
            border: '0.5px solid #888',
            borderRadius: '1rem',
            marginBottom: 10,
        }}>
            <div className="dropdown-list-button" 
                style={{
                    color: '#e4e4e4',
                    padding: '5px 12px',
                }}>
                { data.type || 'Nuevo ticket' }
            </div>
            <div className="dropdown-list-content">
                <form
                className={style.form}
                onSubmit={ handleSubmit }>
                    <input 
                        type="hidden"
                        name="token"
                        value={session?.user.token || ''}/>
                    <input 
                        type="hidden"
                        name="ticketId"
                        value={data?._id || ''}/>
                        <input 
                        type="hidden"
                        name="eventId"
                        value={data?.eventId || ''}/>
                    <div className={style.form_control}> 
                        <label className={style.label}>Tipo de entrada</label>
                        <input
                            id="type"
                            name="type"
                            autoComplete='true'
                            value={data.type}
                            placeholder='Título de tu evento'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={style.form_control}> 
                        <label className={style.label}>Fecha</label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            autoComplete='true'
                            min={ new Date().toJSON().split('T')[0] }
                            value={data?.date.split('T')[0]}
                            required
                            onChange={handleInputChange}
                            />                        
                    </div>
                    <div className={style.form_control}>
                        <label className={style.label}>Hora</label>
                        <input
                            id="hour"
                            name="hour"
                            type="time"
                            required
                            value={data.hour}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className={style.form_control}> 
                        <label className={style.label}>Precio</label>
                        <input
                            id="price"
                            name="price"
                            autoComplete='true'
                            type='string'
                            value={data.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={style.form_control}> 
                        <label className={style.label}>Cantidad disponible</label>
                        <input
                            id="ticketsAvailableOnline"
                            name="ticketsAvailableOnline"
                            autoComplete='true'
                            value={data.ticketsAvailableOnline}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Guardar Entrada</button>
                </form>
            </div>
        </div>
    )
}