import { useState } from "react";
import EventDetail from "../../components/event-detail"
import s from './evento.module.scss'

async function getEventById(id: string) {
    const res = await fetch(`${process.env.apiUrl}/events/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch dataa');
    } 
    return res.json();
}

export default async function Event({params}: {params: {id: string}}) {
    const { event }  = await getEventById(params.id);
 
    
    const [dateStr, timeStr] = new Date(event.date).toISOString().split('T');

   
    
    return (
        <div className={s.event_wrapper}>
            <div className={s.info_area}>
                <div className={s.date_area}>
                    <div className={s.date}>{dateStr}</div>
                    <div className={s.time}>{timeStr}</div>
                </div>
                <h1>{event.title}</h1>
                
            </div>
        </div>
    )
}