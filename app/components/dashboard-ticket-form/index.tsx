'use client'

import { useEffect, useState } from "react";
import style from "./page.module.scss"
import { TicketTypeData } from "@/app/types/ticket";
import useTicketsStore from "@/app/store/ticketsTypeStore";

type EventProps = {
    ticket: TicketTypeData;
}

export default function TicketForm({ ticket }: EventProps) {
    const [data, setData] = useState<TicketTypeData>(ticket);
    const [toggle, setToggle] = useState<boolean>(false);
    const addTicket = useTicketsStore((state) => state.addTicket);
    
    useEffect(() => {
        setData(ticket);
    }, [ticket]);
    
    const handleToggleClick = () => {
        setToggle(!toggle);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/admin/entradas', {
            method: 'POST',
            body: formData,
        })
    
        // Handle response if necessary
        const { ok, newTicketType, message} = await response.json();
        if(ok) {
            addTicket(newTicketType);
        }
        // ...
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;    
        setData((values: TicketTypeData) => ({
            ...values,
            [name]: type === 'checkbox' ? checked : value
        }));        
    };
    
    return (
        <div>
            <div 
                onClick={handleToggleClick}
                className="dropdown-list-button" 
                style={{
                    color: '#e4e4e4',
                    padding: '5px 12px',
                    cursor: 'pointer'
                }}>
                { data.type || 'Crear un ticket nuevo' }
            </div>
            <div 
                className={style.dropdown_list_content} 
                style={{ 
                    display: toggle ? 'block' : 'none',
                    transition: '1s all',
                    opacity: toggle ? 1 : 0,
                    pointerEvents: 'auto',
                    zIndex: toggle ? 1 : 0,  
                }}>
                <form
                    className={style.form}
                    onSubmit={ handleSubmit }>
                    <input 
                        type="hidden"
                        name="ticketId"
                        value={data?._id || data?.ticketId || ''}/>
                    <input 
                        type="hidden"
                        name="eventId"
                        value={data?.eventId || ''}/>
                    <div className={style.form_control}> 
                        <label htmlFor="type" className={style.label}>Tipo de entrada</label>
                        <input
                            id="type"
                            name="type"
                            autoComplete='off'
                            value={data.type}
                            placeholder='Título de tu evento'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className={style.form_control}> 
                        <label htmlFor="date" className={style.label}>Fecha</label>
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
                        <label htmlFor="hour" className={style.label}>Hora</label>
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
                        <label htmlFor="price" className={style.label}>Precio</label>
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
                        <label htmlFor="ticketsAvailableOnline" className={style.label}>Cantidad disponible</label>
                        <input
                            id="ticketsAvailableOnline"
                            name="ticketsAvailableOnline"
                            autoComplete='true'
                            value={data.ticketsAvailableOnline}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                        <button type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                <path d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/></svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}