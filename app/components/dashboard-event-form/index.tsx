'use client'

import { useSession } from "next-auth/react"
import style from "./create-event-form.module.scss"
import { useState } from "react";
import { EventData } from "@/app/types/event";
import { useRouter } from 'next/navigation';

const EVENT_INITIAL_DATA = {
    eventId: "",
    title: "",
    description: "",
    address: "",
    image: "",
    eventType: "",
    ticketsAvailableOnline: 0,
    hasLimitedPlaces: false,
    ticketsTypeList: [],
    price: 0, 
    purchasedTicketsList: [],
}

export default function EventForm({ event }: { event: EventData }) {
    const { data: session, status } = useSession();
    const [ data, setData ] = useState<EventData>(event);
    const emptyEvent: EventData = EVENT_INITIAL_DATA;
    const { push } = useRouter();
    
    async function handleSubmit(event: any) {
        try {
            event.preventDefault()
            const formData = new FormData(event.currentTarget);
            const eventId = formData.get('eventId') as string;
            const response = await fetch('/api/admin/eventos', {
                method: eventId? 'PUT' : 'POST',
                body: formData,
            })
        
            // Handle response if necessary
            const { ok, newEvent, message} = await response.json();
            if(ok) {                
                setData(emptyEvent);
                push(`/admin/eventos/${newEvent.eventId}`)
                return;
            }
            console.error(message)
            // ...
        } catch (error) {
            console.error(error)
        }
        
    }

    const handleInputChange = (event: any) => {
        const { name, value, type, checked } = event.target;
        
        setData(values => ({
            ...values,
            [name]: type === 'checkbox' ? checked : value
        }));        
    };
   
    return (
        <form 
            onSubmit={handleSubmit}
            className={style.form}>
            <input 
                type="hidden"
                name="email"
                value={session?.user.email || ''}/>
            <input 
                type="hidden"
                name="eventId"
                value={data?.eventId}/>
            <div className={style.form_control}>
                <label htmlFor="title" className={style.label}>Nombre del evento</label>
                <input 
                    id="title"
                    name="title"
                    value={data?.title}
                    onChange={handleInputChange}
                    required
                    />
            </div>
            <div className={style.form_control}>
                <label htmlFor="description" className={style.label}>Description</label>       
                <textarea 
                    id="description" 
                    name="description"
                    aria-label="minimum height"
                    placeholder="Minimum 3 rows"
                    value={data?.description}
                    onChange={handleInputChange}
                    ></textarea>
            </div>
            <div className={style.form_control}>
                <label htmlFor="address" className={style.label}>Dirección</label>
                <input 
                    type="string"
                    id="address" 
                    name="address"
                    required
                    value={data?.address}
                    onChange={handleInputChange}
                    />
            </div>
            <div className={style.form_control}>                
                <label htmlFor="eventType" className={style.label}>Tipo de evento</label>
                <input 
                    type="string"
                    id="eventType" 
                    name="eventType"
                    required
                    value={data?.eventType}
                    onChange={handleInputChange}
                    />
            </div>
            <div className={style.form_control}>                
                <label htmlFor="ticketsAvailableOnline" className={style.label}>Localidades</label>
                <input  
                    type="number"
                    id="ticketsAvailableOnline" 
                    name="ticketsAvailableOnline"
                    required
                    value={data?.ticketsAvailableOnline}
                    onChange={handleInputChange}
                    />
            </div>
            <div className={style.form_control}> 
                <label htmlFor="hasLimitedPlaces" className={style.label}>Lugares limitados</label> 
                <input type="checkbox"
                    id="hasLimitedPlaces"
                    name="hasLimitedPlaces"
                    checked={data?.hasLimitedPlaces}
                    onChange={handleInputChange}
                    />
            </div>

            <button
                type="submit">Guardar Evento</button>          
        </form>
    )
}