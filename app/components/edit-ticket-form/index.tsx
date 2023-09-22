'use client'

import { useEffect, useState } from "react";
import style from "./page.module.scss"
import { TicketTypeData } from "@/app/types/ticket";
import useTicketsStore from "@/app/store/ticketsTypeStore";
import Dialog from "../dialog";

type EventProps = {
    ticket: TicketTypeData;
    key: number;
    index: number;
}

export default function EditTicketForm({ ticket, index }: EventProps) {
    let timeStr = `${ticket?.date.split('T')[1].split('.')[0]}`;    
    ticket.hour = timeStr;

    const [data, setData] = useState<TicketTypeData>(ticket);
    const [toggle, setToggle] = useState<boolean>(false);
    const [dialog, setDialog] = useState<boolean>(false);
    const removeTicket = useTicketsStore((store) => store.removeTicket);
    
    useEffect(() => {
        setData(ticket);
    }, [ticket]);    
    
    const handleToggleClick = () => {
        setToggle(!toggle);
    };

    const handleDialogClick = () => {
        setDialog(true)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const response = await fetch('/api/admin/entradas', {
            method: 'PUT',
            body: formData,
        })
    
        // Handle response if necessary
        const res = await response.json();
        if(res.ok) {
            console.log('response', res)
            alert(res)
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

    const handleDelete = async (id: string) => {
        
        const response = await fetch(`/api/admin/entradas/${id}`, {
            method: 'DELETE',
        })
    
        // Handle response if necessary
        const datas = await response.json();
        if(datas.ok) {
            //alert(id)
            setToggle(!toggle)
            removeTicket(id)            
        }
    }
    
    const onClose = () => setDialog(false);

    const onOk = () => handleDelete(data?._id);

    return (
        <>
        { dialog && (
            <Dialog title={`Eliminar`} showDialog={dialog} onClose={onClose} onOk={onOk}>
                <p>Desea eliminar la entrada {data.type}?</p>
            </Dialog>
        )}
        <div 
            key={index}>
            <div 
                onClick={handleToggleClick}
                className="dropdown-list-button" 
                style={{
                    color: '#e4e4e4',
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
                        value={data?._id || ''}/>
                    <input 
                        type="hidden"
                        name="eventId"
                        value={data?.eventId || ''}/>
                    <div className={style.form_control}> 
                        <label htmlFor="type" className={style.label}>Tipo de entrada</label>
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
                        <button 
                            type="button"
                            style={{
                                backgroundColor: 'transparent',
                                border: '0.5px solid #888',
                                borderRadius: '5px',
                                marginLeft: '1rem'
                            }}
                            onClick={handleDialogClick}>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1em" 
                                    viewBox="0 0 448 512"
                                    style={{
                                        fill: '#02fba0'
                                    }}>
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}