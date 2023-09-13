'use client'

import { useSession } from "next-auth/react"
import style from "./create-event-form.module.scss"
import { useState } from "react";
import { EventData } from "@/app/types/event";

type EventProps = {
    event: EventData,
}

export default function EventForm({ event }: EventProps) {
    const { data: session } = useSession();
    const [data, setData] = useState<EventData>(event);
    //console.log(data)
    async function handleSubmit(event: any) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const eventId = formData.get('eventId') as string;
        const response = await fetch('/api/admin/eventos', {
            method: eventId? 'PUT' : 'POST',
            body: formData,
        })
    
        // Handle response if necessary
        const data = await response.json()
        //console.log(data)
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
        <form 
            onSubmit={handleSubmit}
            className={style.form}>
            <input 
                type="hidden"
                name="email"
                value={session?.user.email || ''}/>
            <input 
                type="hidden"
                name="token"
                value={session?.user.token || ''}/>
            <input 
                type="hidden"
                name="eventId"
                value={data?.eventId}/>

            <div className={style.form_control}>
                <label className={style.label}>Título de tu evento</label>
                <input 
                    id="title"
                    name="title"
                    value={data?.title}
                    onChange={handleInputChange}
                    required
                    />
            </div>
            <div className={style.form_control}>
                <label className={style.label}>Description</label>       
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
                <label className={style.label}>Dirección</label>
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
                <label className={style.label}>Tipo de evento</label>
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
                <label className={style.label}>Localidades</label>
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
                <label className={style.label}>Lugares limitados</label> 
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