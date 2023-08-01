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
 
    const date = new Date(event.date)
    let dateStr = date.toLocaleDateString(); 
    let timeStr = date.toLocaleTimeString(); 
    
    return (
        <div className={s.event_wrapper}>
            <div className={s.info_area}>
                <div className={s.date_area}>
                    <div className={s.date}>{dateStr}</div>
                    <div className={s.time}>{timeStr}</div>
                    <h1>{event.title}</h1>                
                </div>
                <div className={s.image_area}></div>
            </div>
            <div className={s.buy_area}>
                <h1>Comprar entrada</h1>
                <div className={s.price_grid}>
                    <div className={s.grid_header}>
                        <div className={s.price}>Precio</div>
                        <div className={s.quantity}>Cantidad</div>
                        <div className={s.buy}>
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}