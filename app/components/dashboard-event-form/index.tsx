'use client'

import { useSession } from "next-auth/react"
import style from "./create-event-form.module.scss"
import { useState } from "react";

type EventProps = {
    event: EventData,
}

type EventData = {
    eventId: string;
    title: string;
    description: string;
    address: string;
    eventType: string;
    ticketsAvailableOnline: number;
    hasLimitedPlaces: boolean;
    //date: string;
}

export default function EventForm({ event }: EventProps) {
    const { data: session } = useSession();
    const [data, setData] = useState<EventData>(event);
    
    async function handleSubmit(event: any) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        
        const response = await fetch('/api/admin/eventos', {
            method: 'POST',
            body: formData,
        })
    
        // Handle response if necessary
        const data = await response.json()
        
        // ...
      }

      const handleInputChange = (event: any) => {
        const { name, value, type, checked } = event.target;
        
        setData(values => ({
          ...values,
          [name]: type === 'checkbox' ? checked : value
        }));
        
        console.log("🚀 ~ file: index.tsx:49 ~ handleInputChange ~ data:", data)
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
                value={event?.eventId}/>

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
            { /**
             * <div className={style.form_control}> 
                <label className={style.label}>Fecha</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    autoComplete='true'
                    min={new Date().toJSON().split('T')[0]}
                    value={data?.date}
                    required
                    onChange={handleInputChange}
                    />
                <label className={style.label}>Hora</label>
                <input
                    id="hour"
                    name="hour"
                    type="time"
                    required
                    onChange={handleInputChange}
                    />
            </div>
             */}
            <div className={style.form_control}> 
            </div>
            <button
                type="submit">Guardar Evento</button>          
        </form>
    )
}